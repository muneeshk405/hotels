const express=require('express');
const router=express.Router()
const Menu = require('./../modules/Menu')

router.get('/', async (req, res) => {
  try {
    const response = await Menu.find()
    res.status(200).json(response)
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
})

router.post('/', async (req, res) => {
  try {
    const data = req.body
    const newMenu = new Menu(data);
    const response = await newMenu.save();
    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
})
router.get('/:taste', async (req, res) => {
  try {
    const taste = req.params.taste;
    if (taste == "spicy" || taste == "sour" || taste == "sweet") {
      const response = await Menu.find({ taste: taste })
      res.status(200).json(response)
    }

    else {
      res.status(404).json({
        error: "Invalid taste type",
      }
      )
    }
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }

})
module.exports = router;