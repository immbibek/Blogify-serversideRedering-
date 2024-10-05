const express=require('express');
const path=require("path");

const mongoose=require('mongoose');

const userRoute=require('./routes/user')

const app=express();
const PORT=8000;
//Important Note------>  in directly runnig here we are running in a port 8000 but In real deployment we are deploying in other cloud server like AWS or Azure it might be possible 8000 port is not availaible. so we can't choose Port directly So to handle this we have to use env variable.

// Connectrion with mongoDb
mongoose.connect('mongodb://localhost:27017/blogify').then(e =>console.log('MongoDB Connected'))


// To set view engine
app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

//middle ware to handel form data
app.use(express.urlencoded({extended:false}));


app.get('/',(req,res)=>{
    res.render('home');
})
app.use('/user',userRoute)

app.listen(PORT,()=>console.log('Server started at port ',PORT));