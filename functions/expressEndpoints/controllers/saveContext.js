const analyser = require("../functions");

const ResponseSchema = require("../models/responseModel");

module.exports = async (req, res) => {
  let instance = { ...req.body };
  console.log(instance);
  try {
    console.log("Attempting to process data:\n");
    instance.questions = analyser.analysisOfAnswers2(
      instance.dataMatrix,
      instance.questions,
      instance.metaData
    );

    // console.log("analysing responses");
    instance.responses = analyser.processDataMatrix(
      instance.dataMatrix,
      instance.questions,
      instance.metaData
    );

    // console.log("analysing total score");
    instance.metaData.totalQuizScore = analyser.totalQuizScore(
      instance.questions
    );
    // instance.dataMatrix = null;
    // console.log("Done creating instances");
    const responseSchema = new ResponseSchema(instance);
    const doc = await responseSchema.create(instance);

    res.status(200).json(doc);
  } catch (err) {
    const errMessage = err?.message;
    res.status(500).json({
      success: false,
      message: errMessage ?? err,
      data: instance,
    });
  }
};
