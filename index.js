const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const {Admin} = require('./sequelize');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(morgan('tiny'))

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)