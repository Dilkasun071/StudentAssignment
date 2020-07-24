const express = require('express');
let Assignment = require('../models/Assignment');
const assignmentRoutes = express.Router();

assignmentRoutes.post('/add', (req,res) => {
    let assignment = new Assignment(req.body);
    assignment.save()
    .then(assignment => {
        res.status(200).json({'assignment':'assignment added successfully'});
    })
    .catch(err => {
        res.status(400).send("Unable to save"); 
    })
});

assignmentRoutes.get('/', (req,res) => {
    Assignment.find(function(err, Assignment){
        if(err){
            console.log(err);
        }else{
            res.json(Assignment);   
        }
    })
});

assignmentRoutes.get('/delete/:id', (req,res) => {
    Assignment.findByIdAndRemove({_id: req.params._id}, function(err, assignment){
        if(err){
            res.json(err);
        }else{
            res.json("Successfully removed");
        }
    })
});

module.exports = assignmentRoutes;