//import libs
const express = require('express');
const path = require('path')
    //express init
const server = express()
server
    .use(express.static('public'))
    //create route
    .get('/', (req, res) => {
        return res.sendFile(path.join(__dirname, 'views', 'index.html'))

    })

//start server
server.listen(5505)