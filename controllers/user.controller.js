const User = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");

const allUsers = async (req, res) => {
  try {
    const alluser = await User.find();
    res.json(alluser);
  } catch (error) {
    console.error();
  }
};

const singleUser = async (req, res) => {
  try {
    const oneUser = await User.find({ id: req.params.id });
    res.json(oneUser);
  } catch (error) {
    console.error();
  }
};

const addUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      name: req.body.name,
      age: Number(req.body.age),
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    user.name = req.body.name;
    user.age = Number(req.body.age);
    await user.save();

    res.status(201).json(await User.find());
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const dlt_id = req.params.id;
    const deletedUser = await User.find({ id: dlt_id });
    await User.deleteOne({ id: dlt_id });
    res.status(200).json(deletedUser);
  } catch (error) {
    console.error();
  }
};

module.exports = { addUser, singleUser, allUsers, updateUser, deleteUser };
