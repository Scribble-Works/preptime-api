// const mongoose = require('mongoose');
// const responseSchema = new mongoose.Schema({
//     created_at: {
//         type: Date,
//         required: true,
//         default: new Date()
//     },
//     dataMatrix: {
//         type: Array
//     },
//     metaData: {
//         type: Object,
//         required: true
//     },
//     questions: {
//         type: Array,
//         required: true
//     },
//     sheet_id: {
//         type: String
//     },
//     title: {
//         type: String,
//         required: true
//     },
//     responses: {
//         type: Array,
//         required: true
//     }
// })

const { firestore } = require("../../firebase");

// module.exports = mongoose.model('responses', responseSchema)
class ResponseSchema {
  created_at;
  dataMatrix;
  metaData;
  questions;
  sheet_id;
  title;
  responses;

  constructor(metaData, questions, sheet_id, title, responses, dataMatrix) {
    if (!responses) throw Error("Responses is required");
    if (!title) throw Error("Title is required");
    if (!questions) throw Error("Questions is required");
    if (!metaData) throw Error("Meta data is required");
    this.metaData = metaData;
    this.sheet_id = sheet_id;
    this.title = title;
    this.responses = responses;
    this.questions = questions;
    this.dataMatrix = dataMatrix;
    this.created_at = new Date();
  }

  getResponse() {
    return {
      created_at: this.created_at,
      title: this.title,
      dataMatrix: this.dataMatrix,
      sheet_id: this.sheet_id,
      responses: this.responses,
      questions: this.questions,
      metaData: this.metaData,
    };
  }
  async create() {
    const data = this.getResponse();
    const docRef = await firestore.collection("responses").add(data);
    return { ...data, _id: docRef.id };
  }

  static async findById(id) {
    const docSnpashot = await firestore.collection("responses").doc(id).get();
    const res = { ...docSnpashot.data(), _id: docSnpashot.id };

    return res;
  }
}
module.exports = ResponseSchema;
