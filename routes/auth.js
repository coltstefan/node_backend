const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
//REGISTER

router.post("/register" , async (req,res) =>{
    const newUser = User({
        username:req.body.username,
        email: req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password , process.env.PASS_SEC).toString(),
        isTrainer: req.body.isTrainer,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        height: req.body.height,
        weight: req.body.weight,

    });

    try{

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch(err) {
        res.status(500).json(err);
    }

});


//Login

router.post("/login", async (req,res) => {

    try{
        const user = await User.findOne({username: req.body.username});
        console.log(req.body.username);
        !user && res.status(401).json("Wrong username");


        const hashedPassword = CryptoJS.AES.decrypt(user.password , process.env.PASS_SEC);

        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        OriginalPassword !== req.body.password &&
            res.status(401).json("Wrong password");

            const accessToken = jwt.sign({
                id:user._id,
                isAdmin:user.isAdmin,
            }, process.env.JWT_SEC,
            {expiresIn:"3d"}
            );

        const { password, ...others } = user._doc;


        res.status(200).json({...others,accessToken});

    }catch(err) {
        res.status(500);
    }


});


module.exports = router