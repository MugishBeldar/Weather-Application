const express = require('express');
// const userRouter = require("../src/rest-services");
const cors = require('cors');
const weatherRoute = require('./rest-services');
const app = express();

app.use(cors());
// BODY PARSER
app.use(express.json());

// MOUNTING ROUTES
app.use("/api/v1", weatherRoute.router);

app.listen(4000, () => { console.log("listening on port no :-- 4000"); });
