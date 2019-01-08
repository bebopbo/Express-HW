const router = require("express").Router();
const path = require("path");

// Routes--------------------------------------------------
// Route to the homepage "/"
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Route to the notes page "/notes"
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router