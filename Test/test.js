const text = document.getElementById("name");
const quantity = document.getElementById("quantity");
const date = document.getElementById("date");
const impression = document.getElementById("imp");
const button = document.getElementById("add");
const submit = document.getElementById("submit");
var ul = document.querySelector("ul");
var arr = [];
button.addEventListener("click", async (e) => {
  e.preventDefault();
  const medicine = text.value; // med name
  const quant = quantity.value; // quantity
  console.log(medicine, quant)
  let obj = { "med": medicine, "quantity": quant }
  arr.push(obj);
  var li = document.createElement("li");
  li.append(document.createTextNode(medicine));
  li.append(document.createTextNode(quant));
  ul.appendChild(li);
  //axios.post("http://localhost:3000/addmed",arr);
  console.log(arr);
});
submit.addEventListener("click", async (e) => {
  e.preventDefault();
  const date_text = date.value; // med name
  const impvalue = impression.value; // quantity
  let obj={"date":date_text,"impression":impvalue,"medcines":arr}
  axios.post("http://localhost:3000/addappointment",obj)
  .then(response => { 
    console.log(response)
  })
  .catch(error => {
      console.log(error.response)
  });
});

