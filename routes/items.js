const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

//Get Items
router.get('/', async (req, res) => {
    try{
        const items = await Item.find();
        res.json(items);
    }catch(err){
        res.json({message: err});
    }
});

// Create New Item
router.post('/', async (req, res) => {
    const item = new Item({
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        material: req.body.material
    });
    try{
        const newItem = await item.save();
        res.json(newItem);
    }catch(err){
        res.json({message: err});
    }
})

module.exports = router;