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

//Get One Item
router.get('/:id', async (req, res) => {
    try{
        const item = await Item.findById(req.params.id);
        res.json(item);
    }catch(err){
        res.json({message: err});
    }
})

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

router.put('/:id', async (req, res) => {
    try{
        const updatedItem = await Item.updateOne({
            _id: req.params.id}, {
                $set: {
                    name: req.body.name,
                    type: req.body.type,
                    price: req.body.price,
                    material: req.body.material
                }
            }
        );
        res.json(updatedItem);
    }catch(err){
        res.json({message: err});
    }
})


module.exports = router;