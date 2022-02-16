const router = require("express").Router();
const FitnessProgramme = require("../models/FitnessProgramme");

//CREATE 
router.post("/create" , async (req,res) => {
   
    const newFitProg = FitnessProgramme(
        {
            name: req.body.name,
            type: req.body.type,
            duration: req.body.duration,
            price: req.body.price,
            trainerId: req.body.trainerId,
            users: req.body.users

        }
    );

    try{
        const savedProgramme = await newFitProg.save();
        res.status(200).json(savedProgramme);
    }catch(err){
        res.status(500).json(500);
    }
    
});

//find by trainerId
router.get("/find/:trainerId" , async (req,res) => {
    try{
        const programmes = await FitnessProgramme.find({trainerId: req.params.trainerId});
        res.status(200).json(programmes);
    }catch(err){
        res.status.json(err);
    }
})




module.exports = router