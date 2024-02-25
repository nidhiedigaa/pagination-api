require('dotenv').config()
const express=require('express')
const paginationResult=require('./controllers/pagination')
const users=require('./users.json')

const app=express()

app.get('/users',paginationResult(users),(req,res)=>
{
    return res.status(200).json(req.pagination)
})

const PORT=process.env.PORT || 3333
app.listen(PORT,()=>console.log(`server is running on ${PORT}`))