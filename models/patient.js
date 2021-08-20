const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const Schema= mongoose.Schema;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

// medicine Schema
const medicine = new Schema({
name : String,
quantity: String,
morning : Number,
afternoon : Number,
night : Number
});

//Appointment Schema that uses medic
const appointment = new Schema({
date : Date,
medicines : [medicine],
symptoms : String,
fee : Number,
notes : String
});

//final patient schema based on both apppointment and medicine schemas
const patientSchema = new Schema ({
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

module.exports = mongoose.model('Patient',patientSchema);