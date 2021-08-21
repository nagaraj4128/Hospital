//require statements
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path')
const Patient = require('./models/patient')

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

app.post('/addpatient',(req,res) =>{
  var param = req.body;
  var obj = {
    name : param.name,
    age : param.age,
    disease : param.disease,
    patient_history : param.patient_history,
    phone : param.phone,
    details : param.details,
    next_appointment : param.next_appointment,
    appointments : {
      date : param.appointments.date,
      symptoms : param.appointments.symptoms,
      fee : param.appointments.fee,
      notes : param.appointments.notes,
      medicines : {
        name : param.appointments.medicines.name,
        quantity : param.appointments.medicines.quantity,
        morning : param.appointments.medicines.morning,
        afternoon : param.appointments.medicines.afternoon,
        night : param.appointments.medicines.night
      }
    }
  }

  Patient.create(obj,function(err,Patient){
    if(!err) console.log('Added successfully')
  })

  Patient.create(param,function(err,Patient){
    if(!err) console.log('Added successfully')
  })

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
