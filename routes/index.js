var express = require('express');
var router = express.Router();
var uuid = require('uuid');
var bodyParser = require('body-parser');

router.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Cache-Control');
  next();
});
router.use(bodyParser.json());

let ideas = [];

router.get('/ideas', function(req, res, next) {
  res.json(ideas);
  console.log('Getting ideas');
});

router.get('/ideas/new', function(req, res, next) {
  const idea = {
      id: uuid(),
      createdOn: new Date(),
    };
  console.log('returning idea: ', idea);
  ideas.push(idea);
  res.json(idea);
});

router.post('/idea/update', function(req, res, next) {
  res.json({
      message: 'idea updated'
    });
  console.log('updated', req.body)
});

router.post('/idea/delete', function(req, res, next) {
  newIdeas = ideas.filter((idea)=>{
    return idea.id !== req.body.id;
  });
  ideas = newIdeas;
  res.json({
      message: 'idea deleted'
    });
  console.log('deleted idea ' + req.body.id);
});



module.exports = router;
