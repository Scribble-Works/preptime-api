const hubspot = require("@hubspot/api-client");
const hubspotClient = new hubspot.Client({
  accessToken: process.env.HUBSPOT_KEY,
});

module.exports = async (req, res) => {
  let data = req.body;
  console.log(data);
  if (!(data.firstname && data.lastname && data.email && data.phone)) {
    return res.status(500).json({
      success: false,
      message: "firstname,lastname,email and phone required",
    });
  }

  const contactObj = {
    properties: {
      ...data,
    },
  };
  try {
    const createContactResponse =
      await hubspotClient.crm.contacts.basicApi.create(contactObj);
    res.status(200).json({
      success: true,
      response: createContactResponse,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e?.body?.message,
    });
  }
};
