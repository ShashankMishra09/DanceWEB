const express = require("express");
const path = require("path");
const app = express();
const port = 800;

// app.use(express.static('static',option))
app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    const params={}
    res.status(200).render('home.pug',params)
})

app.get('/contact',(req,res)=>{
    res.render("contact.pug")
})

app.listen(port,()=>{
    console.log(`The application started on ${port}`);
})
