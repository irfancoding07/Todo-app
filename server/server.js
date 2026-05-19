require("dotenv").config();

const express = require("express");
const cors = require("cors");

const routes = require("./routes/Todoroutes");
const connectDB = require("./db/db");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// Routes
app.use(routes);

app.listen(5000, () => {
    console.log("Server is running on port no 5000!");
});