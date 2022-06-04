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
  .post('/result', (req, res) => {
    console.log(req.body)
    res.render('result',
      {
        name: req.body.name,
        p1: req.body.p1,
        p2: req.body.p2,
        p3: req.body.p3,
        email: req.body.email,
        address: req.body.address,
        circle: req.body.circle
      })
  })

module.exports = router;
