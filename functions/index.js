const functions = require("firebase-functions");
const { preptimeAPI } = require("./expressEndpoints/index");

exports.preptimeAPI = functions.https.onRequest(preptimeAPI);
