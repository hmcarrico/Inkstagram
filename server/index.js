const express = require("express");
const session = require("express-session");
require("dotenv").config();
//File Imports
const authController = require("./contollers/authController");
const postContoroller = require("./contollers/postController");
// Firebase
const firebase = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

const app = express();
app.use(express.json());
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
  })
);

// Post Endpoints
app.get("/api/post", postContoroller.getAllPosts);
app.post("/api/post", postContoroller.createPost);

// Auth Endpoints
app.post("/auth/register", authController.register);


const port = 4090;
app.listen(port, () => console.log(`listening on port ${port}`));
