const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

var consign = require('consign')
const consignConfig = require('./config/consign.config')

consign(consignConfig)
  .into(app);

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', require('./routes/api.routes'))

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
});