var customers = [{
  name: "Larry King",
  email: "larrythecat@cat.com",
  phone: "099-555-9348",
},
{
  "name": "Sana T",
  "email": "u6138302@au.edu",
  "phone": "111-111-111",
},
{
  name: "John Snow",
  email: "jsnow@dragon.com",
  phone: "987-567-8887",
},
{
  name: "Steven Wu",
  email: "steven@woohoo.com",
  phone: "420-420-420",
},
{
  name: "Angela Jeff",
  email: "aj@caturday.com",
  phone: "747-540-7374",
},
{
  name: "Bob Smith",
  email: "bobthecat@catking.com",
  phone: "098-134-4325",
},
{
  name: "Dave West",
  email: "davethecat@catworld.com",
  phone: "728-606-5103",
},
{
  name: "William Martin",
  email: "willmartin@msm.com",
  phone: "669-567-9868",
}]

// $(document).ready(function () {
//     console.log("ready!");
//     // load data
//     $.ajax({
//         url: "data.json"
//     }).done(function (data) {
//         //$(this).addClass("done");
//         console.log("DONE",data)
//         for(let d in data){
//             // save the data record into our global variable
//             customers.push(data[d])
//             let dataStr = `<tr>
//                 <td>${data[d].name}</td>
//                 <td>${data[d].email}</td>
//                 <td>${data[d].phone}</td>
//             </tr>`
//             $("#data-table tr:last").after(dataStr)
//         }

//         console.log(customers)
//     });
// });

function addToCustomer() {
  let customerObj = {
    name: $("#name").val(),
    email: $("#email").val(),
    phone: $("#phone").val(),
  }

  $("#productBody").html("")

  customers.push(customerObj)
  loadData()
}

function deleteCustomer(index) {
  console.log("DELETE", index)
  delete customers[index]
  $("#customerBody").html("")
  loadData()
}

function loadData() {
  let allRows = ""
  // logoImage.onload = loadingDone;
  for (let p in customers) {
    let cellName = `<td><img class='icon' src='deleteicon.png' onclick='deleteCustomer("${p}")'>` + customers[p].name + "</td>"
    let cellEmail = `<td class="text_center">` + customers[p].email + "</td>"
    let cellPhone = `<td class="text_center">` + customers[p].phone + "</td>"
    let row = `<tr>${cellName}${cellEmail}${cellPhone}</tr>`
    allRows += row
  }
  $("#customerBody").html(allRows)

}
