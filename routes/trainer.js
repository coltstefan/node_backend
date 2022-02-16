const router = require("express").Router();
const Trainer = require("../models/Trainer");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
  } = require("./verifyToken");


//CREATE

router.post("/create" , async (req,res) =>{

    const newTrainer = Trainer({
        username: req.body.username,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        rating: req.body.rating,
        fitnessProgrammes: req.body.fitnessProgrammes
    });

    try{

        const savedTrainer = await newTrainer.save();
        res.status(201).json(savedTrainer);

    } catch(err) {
        res.status(500).json(err);
    }

});

//Get All Trainers

// Get All Trainers
router.get("/", async (req,res) => {
    try{
        const trainers = await Trainer.find();
        res.status(200).json(trainers);
    }catch(err){
        res.status(500).json(err);
    }
  });


//find trainer by username

router.get("/find/:username" , async (req,res) => {
    try{
        const trainer = await Trainer.findOne({username: req.params.username});
        res.status(200).json(trainer);
    }catch(err){
     res.status(200).json(err);   
    }
});

//Update
router.put("/:id" , async (req,res) => {
    try{
        const updatedTrainer = await Trainer.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedTrainer)
    }catch(err){
        res.status(200).json(err);
    }
});

//Delete
router.delete("/:id" , async (req,res) => {
    try{
        await Trainer.findByIdAndDelete(req.params.id);
        res.status(200).json("You are no longer a trainer");
    }catch(err){
        res.status(500).json(err);
    }
});





module.exports = router