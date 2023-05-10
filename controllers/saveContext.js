const ResponseData = require("../models/responseModel");
const analyser = require("../functions");

module.exports = async (req, res) => {
  let instance = { ...req.body };
  try {
    // console.log('Attempting to process data:\n',instance)
    instance.questions = analyser.analysisOfAnswers2(
      instance.dataMatrix,
      instance.questions,
      instance.metaData
    );
    instance.responses = analyser.processDataMatrix(
      instance.dataMatrix,
      instance.questions,
      instance.metaData
    );
    instance.metaData.totalQuizScore = analyser.totalQuizScore(
      instance.questions
    );
    // instance.dataMatrix = null;
    // console.log(instance)

    const doc = await ResponseData.create(instance);
    res.status(200).json(doc);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      success: false,
      message: err.message,
      data: instance,
    });
  }
};
