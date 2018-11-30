var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  let query = "SELECT * FROM `users` ORDER BY id ASC"; // query database to get all the players

  // execute query
  db.query(query, (err, result) => {
    if (err) {
      res.render('error')
    }
    res.send(result);
  });
});

module.exports = router;
