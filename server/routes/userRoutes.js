const express = require('express')
const router = express.Router()
const User = require("../models/userModel")

router.post('/signup', async (req, res) => {
    const {name, password} = req.body
    try{
        const newUser = new User({name, password})
        const createdUser = await newUser.save()
        res.status(200).json(createdUser)
    }catch(error) {
        console.log(error);
    }
})

module.exports = router