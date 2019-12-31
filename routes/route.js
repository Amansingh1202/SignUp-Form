const express = require('express');
const router = express.Router();
const Users = require('../models/users');
//Retrieving entire data
router.get('/users',(req,res,next)=>{
   Users.find(function (err,user) {
      res.json(user);
   })
});

//Retrieving data using id
router.get('/users/:id',(req,res,next)=>{
  Users.find({_id:req.params.id},function(err,user){
      res.json(user);
   })
});

//Add data
router.post('/users',(req,res,next)=>{
   let newUser = new Users({
      Name: req.body.Name,
      Email: req.body.Email,
      Password: req.body.Password
   });
   newUser.save((err,user)=>{
      if(err){
         res.json('Failed to add user ::' + err);
      }
      else {
         res.json('user added successfully');
      }
   })
});

//Delete data
router.delete('/users/:id',(req,res,next)=>{
   Users.remove({_id:req.params.id},function (err,result) {
      if(err){
         res.json(err);
      }
      else{
         res.json(result);
      }

   })
});


module.exports = router;
