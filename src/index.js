const express  =require('express')

const bodyParser  =require('body-parser')


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.listen(3000,console.log(" app is running in port 3000"))




app.post('/formData',function(req,res){

    const name = req.body.fname
    const value =req.body.value

    res.send(`${name} and ${value}`)
})

app.get('/',function(req,res){
    res.sendFile(__dirname+'/form.html')
    //res.sendFile(__dirname + '/public/signUp.html')
})

