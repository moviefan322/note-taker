//DEPENDENCIES
const express = require("express");
const path = require("path");
const db = require("./db/db.json");

//DATA

//APP/PORT
const app = express();
const PORT = process.env.PORT || 3000;

//MIDDLEWARES

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//ROUTES

//homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

//retrieve all notes
app.get("/api/notes", (req, res) => {
  res.json(db);
});

//retrieve one note
app.get("/api/notes/:index", (req, res) => {
  const { index } = req.params;
  res.json(db[Number(index)]);
});

//START SERVER
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
