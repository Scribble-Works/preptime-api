// const ResponseData = require('../models/responseModel');
const { ResponseSchema } = require("../models/responseModel");
module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await ResponseSchema.findById(id);
    res.status(200).json(data);
  } catch (err) {
    console.log("Error:", err.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch data from database",
    });
  }
};
