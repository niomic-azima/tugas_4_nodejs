let express = require('express');
//import body parser
let bodyParser = require('body-parser');
//import mongoose
let mongoose = require('mongoose');

let app = express();
let apiRoutes = require("./DataSiswa");
//configurasi body parser
app.use(bodyParser.urlencoded({
  extended:true
}));

app.use(bodyParser.json());
//mongoose configurasi conek dan variabel
mongoose.connect('mongodb://localhost/tugas_2_nodejs');
var db = mongoose.connection;

var port = process.env.PORT || 8080;
app.get('/', (req, res) => res.send("Selamat Datang di Data Center Indonesia"));
app.use('/DataSiswa', apiRoutes);

app.listen(port, function() {
  console.log("Running with port"+ port);
})
