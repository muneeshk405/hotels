
const express=require('express');
const router=express.Router()
const Person = require('./../modules/Person')


router.post('/', async (req, res) => {
  try {
    const data = req.body
    const newPerson = new Person(data);
    const response = await newPerson.save();
    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
})

router.get('/', async (req, res) => {
  try {
    const response = await Person.find()
    res.status(200).json(response)
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
})

router.get('/:workType', async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const response = await Person.find({work: workType })
      res.status(200).json(response)
    }

    else {
      res.status(404).json({
        error: "Invalid work type",
      }
      )
    }
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }

})
router.put('/:id',async (req,res)=>{

 try{
  const personId=req.params.id;
  const updatedData=req.body
  const response= await Person.findByIdAndUpdate(personId,updatedData,{
    new:true,
    runValidators:true,
  })
  if(!response){
    return res.status(404).json({message:'Person not found'});
  }
  res.status(200).json(response);
 }
 catch (error) {
   console.error(error);
   res.status(400).json({ message: error.message });
 }
})

router.delete('/:id',async (req,res)=>{

  try{
   const personId=req.params.id;
   const response= await Person.findByIdAndDelete(personId)
   if(!response){
     return res.status(404).json({message:'Person not found'});
   }
   res.status(200).json(response);
  }
  catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
 })
module.exports = router;