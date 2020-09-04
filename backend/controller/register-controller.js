const connection = require("../db");
var bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  var today = new Date();
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  var users = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hashedPassword,
    role: req.body.role,
    created_at: today,
    updated_at: today,
  };
  console.log(users);


  connection.query("INSERT INTO users SET ?", users, function (
    error,
    results,
    fields
  ) {
    if (error) {
      res.json({
        status: false,
        message: "there are some error with query",
      });
    } 
      res.json({
        status: true,
        data: results,
        message: "user registered sucessfully"
      });
    console.log(results)
  });
};
