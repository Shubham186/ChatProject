const express = require('express');
const router = express.Router();
const User = require('../models/user');
const validation = require('../utils/validation');

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
       let errors = validation(req.body);
       if(Object.keys(errors).length>0){
            res.status(400).json({errors}); 
            return;       
       } 
       console.log(errors);
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
       }).catch(error=>
        res.status(400).json({error:error.message}));
   });
});

module.exports = router;