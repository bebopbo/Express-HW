//Dependencies 
const express = require("express");
const path = require("path");

//Connection to MYSQL from a separate js file
const connection = require("./db/connection");

const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes--------------------------------------------------
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});


app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});


app.get("/notes", function (req, res) {
    connection.query("SELECT * FROM notepad", [req.params.notepad], function (err, noteData) {
        if (err) throw err;
        
        if (noteData[0]) {
            res.json(noteData[0]);
        } else {
            res.json(null);
        }
        
    });
});




app.post("/notes", function (req, res) {
    console.log("req.body:", req.body);

    connection.query("INSERT INTO notepad SET ?", req.body, function (err, result) {
        if (err) throw err;

        res.json(result);
    });
});

// Start the app on port 3000 and log a message
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
