//require statements
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path')
const Patient = require('./models/patient')
const methodOverride = require('method-override')
const bodyParser=require('body-parser')
var fs = require('fs');

app.use(bodyParser.json());

var myCss = {
         style : fs.readFileSync('views/test.css','utf8')
};
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/views'));

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

app.get('/searchbyname',(req,res) =>{
  res.render('searchbyname.ejs');
})

app.get('/showpatientdetails/:id',(req,res) =>{
  Patient.findById(req.params.id, (err,person) =>{
    if(!err){
      console.log(person);
      res.render('displaypatient',{person});
    }
  });
});

app.post('/addappointment',(req,res)=>{
    console.log(req.body);
});

app.post('/showsearchresults',async (req,res) =>{
  const name = req.body.patient.name;
  //console.log(name);
  var thename = name;
  const names = await Patient.find( { name : { $regex : new RegExp(thename, 'i') } } );
  res.render('displayresults.ejs',{names});
});
app.get('/test',(req,res)=>{
  res.render('test',{
    title: 'idc',
    myCss: myCss
  });
})
app.get('/display', async (req,res)=>{
  const patients_list = await Patient.find({});
  res.render('all.ejs',{patients_list});
});

app.post('/addmed',async (req,res)=>{
  const medname=req.body;
  console.log(req.body);
})

app.get('/med', async (req,res)=>{
  res.render('test.ejs');
})

app.listen(3000, ()=>{
  console.log("Server on port 3000");
})
