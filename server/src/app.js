const express=require('express');
const app=express();
app.use(express.json());
const cors=require('cors');
const morgan=require('morgan');
app.use(morgan('combined'));
app.use(cors());

app.get('/status',(req,res)=>{
    res.send({
        message:"Hello World"
    })
})
const port=process.env.PORT||8081
app.listen(port,()=>console.log(`Server Listening on ${port}`))