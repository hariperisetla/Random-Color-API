const express = require("express");
const app = express();
var cors = require("cors");

const PORT = 5000;

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

app.use(cors());

setInterval(function () {}, 1000);

app.get("/", (req, res) => {
  res.json(getRandomColor());
});

app.listen(PORT, () => console.log("listening on port: " + PORT));
