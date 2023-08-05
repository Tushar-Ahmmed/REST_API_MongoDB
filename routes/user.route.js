const {
  allUsers,
  singleUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const route = require("express").Router();

route.get("/", allUsers);
route.get("/:id", singleUser);
route.post("/", addUser);
route.put("/:id", updateUser);
route.delete("/:id", deleteUser);

module.exports = route;
