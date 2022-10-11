const express = require("express");
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors')
const { database } = require("./database")
const applicationRoutes = require('./routes')


const app = express();
const port = process.env.PORT || 8888;
database();

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

applicationRoutes(app)

app.listen(port, () => {
  console.log(`✅ Server listening on port ${port}`)
})
