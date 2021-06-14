const mongoose = require("mongoose");
const User = require('../models/user');

const createUser = async (req, res) => {
    console.log("create user!!!");
    const user = new User(req.body);
    try {
      const newUser = await user.save();
      res
        .status(200)
        .json({ message: "new user created Successfully", newUser: newUser });
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  const getUser = async (req, res) => {
    console.log("get user!!!");
    try {
      const user = await User.findById(req.params.id);
      if(user)
      res.status(200).json({ user: user });
      else
      res.status(404).send("user not exists")
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  const updateUser = async(req, res) => {
   console.log("update User!!!!")
   User.findByIdAndUpdate(req.body._id, req.body ,{new:true})
   .then(user=>{
       res.status(200).json({updatedUser:user})
   }).catch(err=>
       res.status(500).send(err.message))
  };
  
  const deleteUser = async(req, res) => {
      console.log("deleteUser!!!")
      User.findByIdAndDelete(req.params.id)
      .then(user=>
          res.status(200).json({message:"user deleted Successfully", user:user}))
      .catch(err=>
          res.status(400).send(err.message))
  };

  const getAllUsers = async(req, res) => {
    User.find().then(users=>
        res.status(200).json({users:users})
    ).catch(err=>
        res.status(400).send(err.message))
}


module.exports = { createUser, getUser, updateUser, deleteUser ,getAllUsers }