//DEPENDENCIES
const express = require("express");
const path = require("path");
const db = require("./db/db.json");
const { writeFile } = require("fs");

//DATA

//APP/PORT
const app = express();
const PORT = process.env.PORT || 3000;

//MIDDLEWARES

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//ROUTES
// static folder
// app.use(express.static(path.join(__dirname, "public")));

//homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
//notes page
app.get("/notes.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
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

//post note
app.post("/api/notes", (req, res) => {
  const { title, text } = req.body;
  const newNote = {
    title,
    text,
  };
  db.push(newNote);
  writeFile("./db/db.json", JSON.stringify(db), (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
    }
  });
  res.json(db);
});

//START SERVER
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
