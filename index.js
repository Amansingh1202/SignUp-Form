var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connect mongodb
mongoose.connect('mongodb://localhost:27017/userdata');
mongoose.connection.on('connected',()=>{
    console.log("Connected to mongodb database at port 27017");
});
mongoose.connection.on('error',(err)=>{
   if(err){
       console.log("Error in Database connection " + err);
   }
});

//port number
const port = 3000;

//CORS middleware
app.use(cors());

//Initialse body-parsr
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

app.use('/api',route);

//testing server

app.get('/',(req,res)=>{
   res.send('foobar');
});


app.listen(port,() => {
    console.log("Server started at ::" + port);
});

