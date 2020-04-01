const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const someOtherPlaintextPassword = "not_bacon";

const app = express();

app.use(bodyParser.json());

const database = {
  users: [
    {
      id: "1",
      name: "akachukwu",
      email: "akachi@gmail.com",
      password: "bananas",
      entries: 2,
      joined: new Date()
    },
    {
      id: "2",
      name: "aka",
      email: "aka@gmail.com",
      password: "orange",
      entries: 0,
      joined: new Date()
    }
  ],
  login: [
    {
      id: "987",
      has: "",
      email: "john@gmail.com"
    }
  ]
};

//
app.get("/", (req, res) => {
  res.send(database);
});

//posting for signin
app.post("/signin", (req, res) => {
  const { name, password } = req.body;
  // Load hash from your password DB.
  bcrypt.compare(
    "boy",
    "$2b$10$oRN1beGoEGtfdsv/WIyuCeNvIR5kq89lPbF0OqaJia6GZALxHEV02",
    function(err, result) {
      console.log("yuppies", result);
    }
  );
  bcrypt.compare(
    someOtherPlaintextPassword,
    "$2b$10$oRN1beGoEGtfdsv/WIyuCeNvIR5kq89lPbF0OqaJia6GZALxHEV02",
    function(err, result) {
      console.log("second yuppies", result);
    }
  );
  database.users.forEach(user => {
    if (name === user.name && password === user.password) {
      res.json("logged in");
    }
  });
});

//posting for register
app.post("/register", (req, res) => {
  const { name, password, email } = req.body;
  bcrypt.hash(password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    console.log(hash);
  });
  database.users.push({
    id: "3",
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date()
  });
  res.json(database.users[2]);
});

//getting profile id
app.get("/profile/:id", (req, res) => {
  const { id } = req.params;
  let found = false;
  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      return res.json(user);
    }
  });
  if (!found) {
    res.status(400).json("not found");
  }
});

//posting an image
app.post("/image", (req, res) => {
  const { id } = req.body;
  let found = false;
  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      user.entries++;
      return res.json(user.entries);
    }
  });
  if (!found) {
    res.status(400).json("not found");
  }
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
