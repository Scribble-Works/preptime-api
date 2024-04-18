const admin = require("firebase-admin");
const serviceAccount = require("./preptime-analytics-firebase-adminsdk-cjfdx-4afdb42bb2.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.db = admin.firestore();
