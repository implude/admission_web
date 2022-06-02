var express = require('express');
var router = express.Router();

/* GET home page. */
router
  .get('/', (req, res) => {
    res.render('main');
  })
  .get('/info', (req, res) => {
    res.render('info')
  })
  .get('/deinfo', (req, res) => {
    res.render('deinfo')
  })
  .get('/make_namecard', (req, res) => {
    res.render('make_namecard')
  })
  .get('/input', (req, res) => {
    res.render('input')
  })

module.exports = router;
