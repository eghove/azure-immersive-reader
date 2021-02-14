require("dotenv").config();
const keys = require("./keys");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");

// pull in API routes
const IMMERSIVE_READER_ROUTE = require("./api/controllers/immersiveReaderController");
// Define middleare
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes
app.use("/api/azimmersivereader", IMMERSIVE_READER_ROUTE);
// Send all other requests to the React app.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
