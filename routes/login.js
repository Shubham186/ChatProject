const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/',(req,res)=>{
     User.findOne({email:req.body.email}).then((data,err)=>{
        if(err){
            res.json({error:err});
            return;
        }
        let token = jwt.sign({
            user:data
        },'secret',{ expiresIn: '1h' });
        res.json({
            status:"success",
            token: `Bearer ${token}`
        });
    });
});

module.exports = router;
