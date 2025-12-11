const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const exhbs=require('express-handlebars')


app.engine('hbs',exhbs.engine( 
    {layoutsDir:'viewFolder/',
        defaultLayout:'main',
        extname:"hbs"}
    )
)


app.set('view engine','hbs')
app.set('views','viewFolder')

//app.use(bodyParser.urlencoded({extended:true}))
//app.listen(8000,()=>{console.log('listening to port 8000')})



const dbo=require('./db')

app.get('/',async(req,res)=>{
    let database=await dbo.getDataBase()
    const collection=database.collection('books')
    const cursor=collection.find({})
    let mydata=await cursor.toArray()
    let message='test'
    res.render('main',{message,mydata})
})
let message='' 
switch (req.query.status ) {
  case '1':
    message="inserted successfully"
    break;

  default:
    break;
}
    res.render('main',{message,mydata})


app.post('/store_book',async(req,res)=>{
let database =await dbo.getDataBase()
const collection=database.collection('book')
let bookdata={title:req.body.title, author:req.body.author}
await collection.insertOne(bookdata)
return res.redirect('/?status=1')

})
app.listen(8000,()=>{console.log('listening to 8000 port ')})