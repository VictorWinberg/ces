const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// serve static react build
app.use(express.static(path.resolve(__dirname, "..", "build")));

// set up our express application
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => console.log(`Server app listening on port ${port}!`));
