//Reference to the module
var express     = require('express');  
//Express.js is a Node js web application server framework

var fileUpload  = require('express-fileupload'); 
//Simple express file upload middleware // middleware - bridge between an operating system or database and applications

var cors        = require('cors'); 
//access to selected resources from a different origin

var path        = require('path');  
//The Path module provides a way of working with directories and file paths.

var bodyParser  = require('body-parser'); 
//body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.

var mongoose    = require('mongoose'); 
// MongoDB is a schema-less NoSQL document database
// Database schema is the data structure of a database table 
// MYSQL every database table should have a fixed data structure
// Schema less means the database don't have fixed data structure
// Mongoose is an Object Data Modeling (ODM) library for MongoDB  
// ODM - Data model based on object-oriented programming
// Mongoose provides a straight-forward, schema-based solution to model your application data.
// It manages relationships between data, provides schema validation

//Reference to the routes
var asignRoutes = require('./routes/Assignments');
var Users       = require('./routes/Users');

//Port defined for nodejs 5000
var port = process.env.PORT || 5000;

//Creates a new express application
var app = express();

app.use(cors());
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/assignment', asignRoutes);
app.use('/users', Users);

app.use(fileUpload());


app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

app.post('/upload', (req,res) => {
    if( req.files === null){
        return res.status(400).json({msg: 'No file upload'});
    }
    const file = req.files.file;

    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => { 
        if(err){
            console.error(err);
            res.status(500).send(err);
        }
        res.json({fileName: file.name, filePath: `/upload/${file.name}` })
    })
})

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}

const mongoURI = 'mongodb://localhost:27017/Students';
mongoose
.connect(mongoURI, {useNewUrlParser: true})
.then( ()=> console.log('MongoDB Connected'))
.catch( err => console.log(err));

app.listen(port, ()=>  {
    console.log("Server is listening on port "+port);
});