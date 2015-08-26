var express = require('express');
var router = express.Router();

///////////////////////* GLOBAL *////////////////////////

// constructor
function ItemLibrary() {
  this.items = [];
  this.id = 0;
}

// methods
ItemLibrary.prototype.addItem = function(name) {
  var newItem = {name: name, id: this.id};
  this.items.push(newItem);
  this.id += 1;
};

// create some instances
var storage = new ItemLibrary();
storage.addItem('Noodles');
storage.addItem('Tomatoes');
storage.addItem('Peppers');




/////////////////////GET  ROUTES////////////////////////

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/items', function(req, res, next) {
  res.json(storage.items);
});


// /////////////////////POST ROUTES///////////////////////

router.post('/submit', function(req, res, next) {
  var itemInputName = req.body.itemName
    // res.render('items', {
    storage.addItem(itemInputName);
    //   success: "Yay! you just added an item!"
    // })
    res.json(storage);
});


// /////////////////////PUT ROUTES///////////////////////
router.put('/items/:id', function (req, res, next) {
  // storage.items[req.params.id].name =
});

// /////////////////////DELETE ROUTES///////////////////////
router.delete('/items/:id', function(req, res, next) {
  storage.items.splice([req.params.id], 1);
  res.json(storage.items[req.params.id]);
});


module.exports = router;


///////////////////////* Utilities/Logic *////////////////////////

