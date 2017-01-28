var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

// serve your elements
app.use('/src', express.static('src'));
// serve bower_components
app.use('/bower_components', express.static('bower_components'));
// serve index.html
app.get(/.*/, function(req, res){
  res.sendfile('views/index.html');
});

app.listen(process.env.PORT || 8080, function () {
  console.log(`App listening on port ${port}!`);
});
