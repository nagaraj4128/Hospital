const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


const Schema = mongoose.Schema;

// const appointment = new Schema({
//     date : Date,
//     medicines : [String],
//     fee : Number
// })

// const patient = new Schema ({
//     name : {
//       type : String,
//       required :true
//     },
//     age : {
//       type : Number,
//       required : [true,'Age is required'],
//       min : [0,'Age cannot be less than 0'],
//       max : [140,'Age cannot be greater than 140']
//     },
//     disease : {
//       type : String,
//     },
//     phone : {
//         type : Number,
//         required : true
//     },
//     appointments : [appointment]
//   });
  
//   const sample_patient = db.model('sample_patient',patient)
  
//   sample_patient.insertMany([
//     {name : 'Swastik' , age : 23 , disease : 'covid' , phone : 987654331 ,appointments: [{date : '12-02-2021', fee : 700, medicines : ['vicks','iodex']}]}
//   ])
  
// schema for medicine
const medicine = new Schema({
	name : String,	
	quantity: String,
	morning : Number,
	afternoon : Number,
	night : Number
});

// schema for appointment
const appointment = new Schema({
	date : Date,
	medicines : [medicine],
	symptoms : String,
	fee : Number,
	notes : String
});

// schema for patient 
const patient = new Schema ({
    name : {
      type : String,
      required :true
    },
    age : {
      type : Number,
      required : [true,'Age is required'],
      min : [0,'Age cannot be less than 0'],
      max : [140,'Age cannot be greater than 140']
    },
    disease : {
      type : String,
    },
    pateint_history : String,
    phone : {
    	type: Number,
    	required: true
    },
    appointments : [appointment],
    detail : String,
    next_appointment : Date
  });

// creating a model for patient
const sample_patient = mongoose.model('sample_patient',patient);


sample_patient.insertMany([
  {
    name : 'Bob',
    age : 23,
    disease : 'Covid',
    pateint_history : 'Has been visiting our hospital for the last 2 years',
    phone : 1234567890,
    appointments : [
      {
        date : '11-03-2019',
        medicines : [
          {
            name : 'Paracetamol',
            quantity : '20'
          },
          {
            name : 'Iodex'
          },
          {
            name : 'Vicks'
          }
        ],
        symptoms : 'Fever and cough',
        fee : 800,
        notes : 'Should not drink or eat cold things'
      }
    ],
    detail : 'Random detail',
    next_appointment : '12-04-2021'
  }
])

sample_patient.find({name : 'Bob'},function(err,system){
  if(err) console.log(err);
  else console.log(sample_patient);
})