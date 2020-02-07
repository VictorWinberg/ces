const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
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

app.get("/api/cities", async (req, res) => {
  let cities = [
    { id: 1, longitude: 0, latitude: 9, name: "DAKAR" },
    { id: 2, longitude: 0, latitude: 8, name: "SIERRA LEONE" },
    { id: 3, longitude: 1, latitude: 4, name: "ST. HELENA" },
    { id: 4, longitude: 1, latitude: 12, name: "DE KANARISKE ØER" },
    { id: 5, longitude: 2, latitude: 11, name: "MARRAKESH" },
    { id: 6, longitude: 2, latitude: 7, name: "GULD-KYSTEN" },
    { id: 7, longitude: 3, latitude: 9, name: "TIMBUKTU" },
    { id: 8, longitude: 3, latitude: 13, name: "TANGER" },
    { id: 9, longitude: 3, latitude: 10, name: "SAHARA" },
    { id: 10, longitude: 4, latitude: 7, name: "SLAVE-KYSTEN" },
    { id: 11, longitude: 5, latitude: 12, name: "TUNIS" },
    { id: 12, longitude: 5, latitude: 11, name: "TRIPOLI" },
    { id: 13, longitude: 5, latitude: 9, name: "WADAI" },
    { id: 14, longitude: 6, latitude: 6, name: "CONGO" },
    { id: 15, longitude: 5, latitude: 5, name: "LUANDA" },
    { id: 16, longitude: 6, latitude: 2, name: "HVALBUGTEN" },
    { id: 17, longitude: 7, latitude: 0, name: "KAPSTADEN" },
    { id: 18, longitude: 7, latitude: 5, name: "KABALO" },
    { id: 19, longitude: 6, latitude: 8, name: "DARFUR" },
    { id: 20, longitude: 9, latitude: 12, name: "CAIRO" },
    { id: 21, longitude: 8, latitude: 10, name: "OMDURMAN" },
    { id: 22, longitude: 8, latitude: 7, name: "BAHR EL GHAZAL" },
    { id: 23, longitude: 8, latitude: 3, name: "VICTORIA-FALDENE" },
    { id: 24, longitude: 9, latitude: 2, name: "DRAGEBJERGET" },
    { id: 25, longitude: 9, latitude: 7, name: "VICTORIA-SØEN" },
    { id: 26, longitude: 10, latitude: 9, name: "SUAKIN" },
    { id: 27, longitude: 11, latitude: 8, name: "ADDIS ADEBA" },
    { id: 28, longitude: 11, latitude: 6, name: "ZANZIBAR" },
    { id: 29, longitude: 10, latitude: 4, name: "MOCAMBIQUE" },
    { id: 30, longitude: 11, latitude: 2, name: "KAP ST. MARIE" },
    { id: 31, longitude: 12, latitude: 3, name: "AMATAVE" },
    { id: 32, longitude: 12, latitude: 8, name: "KAP GUARDAFUI" }
  ];
  try {
    const response = await fetch(
      "https://wa-eitpl.azurewebsites.net/api/cities",
      {
        timeout: 2000
      }
    );
    const json = await response.json();
    if (Array.isArray(json)) {
      cities = json;
    }
  } catch (error) {
    console.error(error);
  }
  res.send(cities);
});

app.post("/api/routes", async (req, res) => {
  const { from, to } = req.body;
  console.log(from, to);

  let routes = {
    fast: {
      price: 200,
      duration: 30,
      route: ["DAKAR", "DE KANARISKE ØER", "TANGER", "TUNIS", "CAIRO"]
    },
    cheap: {
      price: 50,
      duration: 300,
      route: ["DAKAR", "DE KANARISKE ØER", "TANGER", "TUNIS", "CAIRO"]
    }
  };

  try {
    const response = await fetch(
      `https://wa-eitpl.azurewebsites.net/api/Calculator?from=${from}&to=${to}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...req.body, weightKg: req.body.weight }),
        timeout: 3000
      }
    );

    const json = await response.json();
    if (json.fast && json.cheap) {
      routes = json;
    }
  } catch (error) {
    console.error(error);
  }
  res.send(routes);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => console.log(`Server app listening on port ${port}!`));
