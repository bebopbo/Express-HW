//Dependencies 
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const router = express.Router();

//Connection to MYSQL from a separate js file
const connection = require("./db/connection");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.use(apiRoutes, router);
app.use(htmlRoutes, router);

// Start the app on port 3000 and log a message
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
