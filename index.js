//require statements
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path')
const Patient = require('./models/patient')

app.use(express.urlencoded({extended : true}));

mongoose.connect('mongodb://localhost:27017/hospital',{
  useNewUrlParser : true,
  useCreateIndex : true,
  useUnifiedTopology : true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

app.get('/',(req,res)=>{
  res.render('home.ejs');
});

app.get('/addpatient',(req,res) =>{
  res.render('addpatient.ejs');
})

app.post('/addpatient',async (req,res) =>{

  const pat=new Patient(req.body.patient);
  await pat.save();
  res.redirect('/display');
})

app.get('/display', async (req,res)=>{
  const patients_list = await Patient.find({});
  res.render('all.ejs',{patients_list});
});
 
app.listen(3000, ()=>{
  console.log("Server on port 3000");
})


//git config --global user.name "Nagaraj"
//
