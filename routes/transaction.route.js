const express = require("express");
const shortid = require("shortid");

const db = require("../db");
const router = express.Router();

router.get("/", (req, res) => {
  res.render('transaction/index',{
    users: db.get('users').value(),
    books: db.get('books').value()
  });
});

router.post("/create", (req, res) => {
  
  req.body.id = shortid.generate();
  db.get('transactions').push(req.body).write();
  console.log(req.body);
  res.redirect("/transactions");
});

module.exports = router;