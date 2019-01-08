const router = require("express").Router();
const connection = require("../db/connection");

// Route that sends back all the data in an array from the "notepad" column in notepad_db in JSON format
router.get("/api/notes", (req, res, next) => {
    connection.query("SELECT * FROM notepad", function (err, noteData) {
        if (err) throw err;
        console.log(err);

        if (noteData[0]) {
            res.json(noteData);
        } else {
            res.json(null);
        }

    });
});

// Inserts data inserted from form into notepad_db and console logs the results
router.post("/api/notes", (req, res, next) => {
    /*console.log("req.body:", req.body);*/

    connection.query("INSERT INTO notepad SET ?", req.body, function (err, postData) {
        if (err) {
            throw err;
            console.log(err);

        } else {
            console.log("Sent to DB:", req.body);
            res.json(postData);
        }
    });
});

// Deletes inserted data from notepad_db, by id
router.delete("/api/notes", (req, res, next) => {

    connection.query("DELETE FROM notepad WHERE id = 16", function (err, result) {
        if (err) {
            throw err;
            console.log(err);
        } else {

            console.log("Query deleted.. ", result)
            res.json(result);
        }


    });
});

module.exports = router
