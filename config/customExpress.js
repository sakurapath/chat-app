const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

module.exports = () => {
    var app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    consign().include('control').into(app)

    return app
}

