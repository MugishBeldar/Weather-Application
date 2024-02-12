require("dotenv").config();
const express = require("express");
const cors = require("cors");
const weatherRouter = require("./routes/Weather/weatherRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Parse incoming JSON payloads

//---------
// Routes
//---------

// Weather route
app.use("/api/v1/", weatherRouter);

//Lister to server

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is up and running on ${PORT}`));
