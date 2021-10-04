// const text = document.getElementById("name");
// const quantity = document.getElementById("quantity");
// const date = document.getElementById("date");
// const impression = document.getElementById("imp");
// const button = document.getElementById("butt");
// const submit = document.getElementById("submit");
// var ul = document.querySelector("ul");
// const id = document.getElementById("kuch_bhi_nahi");
// var arr = [];
// button.addEventListener("click", async (e) => {
//   e.preventDefault();
//   const medicine = text.value; // med name
//   const quant = quantity.value; // quantity
//   console.log(medicine, quant)
//   let obj = { "med": medicine, "quantity": quant }
//   arr.push(obj);
//   var li = document.createElement("li");
//   li.append(document.createTextNode(medicine));
//   li.append(document.createTextNode(quant));
//   ul.appendChild(li);
//   console.log(arr);
// });

// submit.addEventListener("click", async (e) => {
//   e.preventDefault();
//   const id1 = id.value;
//   const date_text = date.value; // med name
//   const impvalue = impression.value; // quantity
//   let obj={"date":date_text,"impression":impvalue,"medcines":arr,"id":id1}
//   // let obj={"date":date_text,"impression":impvalue,"medcines":arr};
//   axios.post("http://localhost:3000/addappointment",obj)
//   .then(response => { 
//     console.log(response)
//   })
//   .catch(error => {
//       console.log(error.response)
//   });
// });