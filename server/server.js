require("dotenv").config();

const express = require("express");

require("./db/ConnectionPool");

const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

var morgan = require("morgan");

const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(require("./routes/teacherRountes"));
app.use(require("./routes/adminRoutes"));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.enable("trust proxy");

app.use(morgan("method :url :response-time ms"));

const port = process.env.PORT || 8000;

app.listen(port, (e) => {
    if (e) {
        console.log(e);
    } else {
        console.log(`CONNECTION TO EXPRESS ESTABLISHED on PORT: ${port}`);
    }
});
