const express= require('express')
const path=require('path')
const app=express()
// const notes= require('../notes.json')
const hbs=require('hbs')
const fs=require('fs')
const { error } = require('console')
const publicPath= path.join(__dirname,'../public')

app.use(express.static(publicPath))
const port = process.env.PORT || 8000
// const data=JSON.stringify(notes)
    const loadNotes=()=>{
        const databuffer=fs.readFileSync('notes.json')
        const data=databuffer.toString()
    return JSON.parse(data)        
    }
const viewPath= path.join(__dirname,'../templates/views')
app.set('view engine','hbs')
app.set('views',viewPath)

app.get('',(req,res)=>{
    res.render('index',{
        title:'index page',
        name:'shivom',

    })
})
const name=loadNotes()
var i=0;
var j=0;
var title=new Array;
var book =new Array;
name.forEach((element) => {
   title[i]=element.title ,
   book[i]=element.body,
   i++
});
app.get('/list',(req,res)=>{
    res.render('list',{
        title:title,
        book:book,
    })     
    });

app.listen(port,()=>{
    console.log("port number is ",port)
}
)
