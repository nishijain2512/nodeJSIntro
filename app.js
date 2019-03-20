const express = require('express')
const fs = require('fs');

const app = express()
const port = 8000

app.get('/', function(req, res) {
  res.sendFile('templates/index.html', {root: __dirname }) //send html file
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))