const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/',(req,res)=>{
   User.findOne({email: req.body.email}).then((data,error)=>{
       if(error){
           res.json({error});
           return;
       }
       if(data){
           res.json({error:"Email already exist"});
           return;
       }
       let user = new User({
           name: req.body.name,
           password:req.body.password,
           email: req.body.email
       });
       user.save().then((result,err)=>{
           if(err){
               res.status(400).json({
                   error:err
               });
               return;
           }
           res.status(200).json({user:result});
       });
   });
});

module.exports = router;