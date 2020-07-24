//Import all external libraries
var express     = require('express');
var fileUpload  = require('express-fileupload');
var cors        = require('cors');
var path        = require('path');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var asignRoutes = require('./routes/Assignments');
var Users       = require('./routes/Users');

//port defined for nodejs 5000
var port = process.env.PORT || 5000;

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