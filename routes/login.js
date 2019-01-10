const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/',(req,res)=>{
    let errors = {};
    if(req.body.email===""){
         errors.email = "Email cannot empty";
    }
    if(req.body.password===""){
        errors.password = "Please enter password";
   }
     User.findOne({email:req.body.email}).then((data,err)=>{
        if(err){
            res.json({error:err});
            return;
        }      
        if(Object.keys(errors).length>0){
            res.status(400).json({errors});
            return;
        }
        if(data.password === req.body.password){
        let token = jwt.sign({
            user:data
        },'secret',{ expiresIn: '1h' });
        res.json({
            status:"success",
            token: `Bearer ${token}`
        });
       } else{
           res.status(400).json({
               error:"Password do not match"
           });
       }
    });
});

module.exports = router;
