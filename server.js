var express = require('express');
var path = require('path');
var multer = require('multer');
var upload = multer({ dest: path.join(__dirname + '/public/')})

var app = express()

app.get('/', ((req, res) => {
  res.sendFile(__dirname + '/views/index.html');
}));

app.post('/upload', upload.single('file'), ((req, res, next) => {
  let size = {"size": req.file.size}
  res.json(size)
}))

let listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});