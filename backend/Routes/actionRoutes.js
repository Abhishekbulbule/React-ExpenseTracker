require('dotenv').config();

const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error',(e)=>{
    console.log(e)

});
database.once('connected',()=>{
    console.log('Database Connected');
});

//routes

const Model = require("../Model/model");
const router = require("./Routes");

//post
router.post('/post',async(req,res)=>{
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json(error.message);
    }
});
//get all 
router.get('/getAll', async(req,res)=>{
    try {
        const data = await Model.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})

//get by id
router.get('/getOne/:id',async(req,res)=>{
    try {
        const data = await Model.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({message:error.message});
        }
        })
        
//update by it
router.patch('/update/:id',async (req,res)=>{
    try {
        const data = req.body;
        const id = req.params.id;
        const options = {new : true};
        const result = await Model.findByIdAndUpdate(id, data, options);
        res.json(result);
    } catch (error) {
        res.status(400).json({message:error.message});        
    }
});
//delete  by id
router.delete('/delete/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const result = await Model.findByIdAndDelete(id);
        res.send(`Document with ${result.name} sucessfully deleted`);
    } catch (error) {
        res.status(400).json({message:error.message});        
    }
});

module.exports = router;