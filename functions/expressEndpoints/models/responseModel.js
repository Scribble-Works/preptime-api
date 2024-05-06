const { supabase } = require("../../utils");

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
    const responseData = this.getResponse();
    // console.log("data", data);
    // const docRef = await db.collection("responses").add({
    //   ...data,
    // });
    delete responseData.sheet_id;

    const { data, error, status, statusText } = await supabase
      .from("responses")
      .insert([responseData])
      .select("*");

    console.log(`Status:${status},${statusText}`);
    if (error) {
      console.log(`Error creating instance :${error}`);
      throw error;
    }

    const response = data[0];

    console.log("data", response);
    return { ...response, _id: response?.sheet_id };
  }

  static async findById(id) {
    const { data } = await supabase
      .from("responses")
      .select("*")
      .eq("sheet_id", id);

    // query will be first item in an array
    const docData = data[0];

    const dataMatrix = JSON.parse(docData?.dataMatrix);
    const res = {
      dataMatrix: dataMatrix,
      _id: docData?.sheet_id,
      ...docData,
    };

    return res;
  }
}
module.exports = ResponseSchema;
