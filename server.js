//DEPENDENCIES
const express = require("express");
const path = require("path");

//DATA

//APP/PORT
const app = express();
const PORT = process.env.PORT || 3000;

//MIDDLEWARES

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//ROUTES

app.get('/api/notes', (req,res) => {

})


//START SERVER
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
