const axios = require("axios");

const baseUrl =
  "https://api.hsforms.com/submissions/v3/integration/secure/submit";

module.exports = async (req, res) => {
  try {
    let data = req.body;
    if (!(data.name && data.email && data.message)) {
      return res.status(500).json({
        success: false,
        message: "name,email and message required",
      });
    }
    const formID = process.env.HUBSPOT_FORMID;
    const portalID = process.env.HUBSPOT_PORTALID;
    const token = process.env.HUBSPOT_KEY;
    const lastSpaceIndex = data.name.lastIndexOf(" ");
    const firstName = data.name.slice(0, lastSpaceIndex);
    const lastName = data.name.slice(lastSpaceIndex + 1);
    const body = {
      fields: [
        {
          name: "email",
          value: data.email,
        },
        {
          name: "firstname",
          value: firstName,
        },
        {
          name: "lastname",
          value: lastName,
        },
        {
          name: "message",
          value: data.message,
        },
      ],
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `${baseUrl}/${portalID}/${formID}`;
    await axios.post(url, body, config);
    res.status(200).json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err?.body?.message,
    });
  }
};
