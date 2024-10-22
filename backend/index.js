// Basic express Boiler Plate Code
const express = require('express');
const cors = require('cors');
const {create_todo, update_todo} = require('./types')
const { todo } = require('./db');
const app = express();

app.use(cors())
app.use(express.json())

app.post('/todo', async (req, res)=>{
    const createPayLoad = req.body;
    const parsePayLoad = create_todo.safeParse(createPayLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "You are sending Wrong Input",
        })
        return;
    }
    // Put it in Mongodb
    await todo.create({
        title: createPayLoad.title,
        desc: createPayLoad.desc,
        completed: false,
    })

    res.json({msg: 'Todo Created'})
})

app.get('/todos', async (req, res)=>{
    const todos = await todo.find({});
    res.json({
        todos
    })
})


app.put('/completed', async (req,res)=>{
    const updatePayLoad = req.body;
    const parsePayLoad = update_todo.safeParse(updatePayLoad);
    if(!parsePayLoad.success){
        res.status(411).json({ 
            msg: "You are sending Wrong Input",
        })
        return;
    }
    // update it in mongodb 
    await todo.update({
        _id : req.body.id
    }, 
    {
        completed: true
    })

    res.json({
        msg : "Todo Mark as true"
    })
})

app.listen(4000)
