const express = require("express");
const cors = require("cors");
const userRoutes  = require('./routes/users');
const morgan = require("morgan");
const dotenv = require("dotenv");

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
// Load ENV variable
dotenv.config({ path: "./config/config.env" });
app.use(express.json());

app.use(morgan('dev'));

app.use('/api', userRoutes)

app.listen(port, function () {
  console.log("server is running on port " + port);
});
 