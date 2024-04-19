const { json } = require("express");
const { db } = require("../../firebase-config/index");

class ResponseSchema {
  created_at;
  dataMatrix;
  metaData;
  questions;
  sheet_id;
  title;
  responses;

  constructor(instance) {
    if (!instance.responses) throw Error("Responses is required");
    if (!instance.title) throw Error("Title is required");
    if (!instance.questions) throw Error("Questions is required");
    if (!instance.metaData) throw Error("Meta data is required");
    this.metaData = instance.metaData;
    this.sheet_id = instance.sheet_id;
    this.title = instance.title;
    this.responses = instance.responses;
    this.questions = instance.questions;
    this.dataMatrix = JSON.stringify(instance.dataMatrix);
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
    console.log("data", data);
    const docRef = await db.collection("responses").add({
      ...data,
    });
    return { ...data, _id: docRef.id };
  }

  static async findById(id) {
    const docSnpashot = await db.collection("responses").doc(id).get();
    const docData = docSnpashot.data();
    const dataMatrix = JSON.parse(docData.dataMatrix);
    const res = {
      dataMatrix: dataMatrix,
      _id: docSnpashot.id,
      ...docData,
    };

    return res;
  }
}
module.exports = ResponseSchema;
