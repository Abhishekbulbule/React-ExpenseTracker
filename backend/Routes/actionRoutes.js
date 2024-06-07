
//routes

const router = require("./Routes");

//post
router.post('/post',(req,res)=>{
    res.send("post api");
});
//get all 
router.get('/getAll', (req,res)=>{
    res.send("Get all Api")
})

//get by id
router.get('/getOne/:id',(req,res)=>{
    res.send(req.params.id)
})

//update by it
router.patch('/update/:id',(req,res)=>{
    res.send('Update by id api')
});
//delete  by id
router.delete('/delete/:id',(req,res)=>{
    res.send('Delete by id api')
});

module.exports = router;