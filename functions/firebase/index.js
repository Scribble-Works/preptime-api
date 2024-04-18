const admin = require("firebase-admin");
const serviceAccount = require("../firebase_admin_sdk.json");

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

exports.firestore = admin.firestore();
