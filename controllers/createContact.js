const axios = require("axios");

const axiosHubspot = axios.create({
  baseURL: process.env.HUBSPOT_API_BASE_URI,
  headers: {
    Authorization: `Bearer ${process.env.HUBSPOT_KEY}`,
    "Content-Type": "application/json",
  },
});

module.exports = async (req, res) => {
  let data = req.body;
  if (!(data.firstname && data.lastname && data.email && data.phone)) {
    return res.status(500).json({
      success: false,
      message: "firstname,lastname,email and phone required",
    });
  }
  try {
    const response = await axiosHubspot.post("/crm/v3/objects/contacts", data);
    res.status(200).json(response.data);
  } catch (e) {
    console.log("error", e);
    res.status(500).json({
      success: false,
    });
  }
};
