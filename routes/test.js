const router =require('express').Router();

router.post('/',(req,res)=>{
    res.json({
        message:"Accessed protected route"
    });
});

module.exports = router;