// const { format } = require("express/lib/response");
// const mongoose = require("mongoose");
// const Patient = require("./models/patient");

// mongoose.connect("mongodb://localhost:27017/hospital", {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   // we're connected!
// });

const text = document.getElementById("input");
const button = document.getElementById("add");
var ul = document.querySelector("ul");
const v = {};
button.addEventListener("click", async (e) => {
  e.preventDefault();
  const textval = text.value;
  var li = document.createElement("li");
  li.append(document.createTextNode(textval));
  // console.log(textval);

  ul.appendChild(li);
  axios.post("http://localhost:3000/med", { sumit: "Sumit" });
  // console.log(textval);
  console.log("sent request");
});
