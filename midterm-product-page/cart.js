// define data in JSON array

var products = [
    {
        name: "PURINA Cat Chow",
        quantity: 1,
        ppu: 685,
        discount: 50
    },
    {
        name: "ROYAL CANIN",
        quantity: 1,
        ppu: 300,
        discount: 15
    },
    {
        name: "Me-O for Adults",
        quantity: 1,
        ppu: 199,
        discount: 11
    },
    {
        name: "Whiskas",
        quantity: 3,
        ppu: 210,
        discount: 25
    }
]

// This function will pick the value from the <selet>
// and add to the table
function addToCart() {

    let productObj = {
        name: $('#products').val(),
        quantity: $('#qty').val(),
        ppu: $('#ppu').val(),
        discount: $('#discount').val()
    }
    

    // Clear existing items in the table
    // let productList = document.getElementById("productList")
    // for (let x = 0; x < products.length; x++) {
    //     productList.deleteRow(1)
    // }
    $('#productBody').html("")

    products.push(productObj)
    loadData()
}


// TODO Should use product ID instead of name
function deleteProduct(index) {
    console.log("DELETE",index)
    delete products[index]  // delete the element from array
    $('#productBody').html("")
    loadData()
}


function loadData() {
    let allRows = ""
    let totaldiscount = 0
    let gross = 0
    for (let p in products) {
        let cellName = `<td><img class='icon' src='delt.jpg' onclick='deleteProduct("${p}")'> ` + products[p].name + "</td>"
        let cellQuantity = '<td class="text-right">' + products[p].quantity + "</td>"
        let cellPPU = '<td class="text-right">' + products[p].ppu + "</td>"
        let cellDiscount = '<td class="text-right">' + products[p].discount + "</td>"
        let total = products[p].ppu * products[p].quantity - products[p].discount
        totaldiscount += parseInt(products[p].discount)
        gross += total
        let cellTotal = '<td class="text-right">' + total + "</td>"
        let row = `<tr>${cellName}${cellQuantity}${cellPPU}${cellDiscount}${cellTotal}</tr>`
        allRows += row

    
        
    }

   
    $('#productBody').html(allRows)

    $("#gross").html(gross)

    

    let vat = gross * 0.07
    let ttl = gross + vat
    

    
    let net = gross + vat
 
    $("#vat").html(vat.toFixed(2))
    $("#net").html(net.toFixed(2))
    $("#ttl").html(ttl.toFixed(2))
    $("#disc").html(totaldiscount.toFixed(2))
    









}





// function loadDataOld() {

//     // $('#productBody').html('<tr><td>xxx</td><td>xxx</td><td>xxx</td><td>xxx</td></tr>')
    
//     let productList = document.getElementById("productList")
//     let gross = 0
//     for (let p in products) {
//         let row = document.createElement("tr")
//         let productName = document.createElement("td")
//         productName.innerHTML = products[p].name

//         let quantity = document.createElement("td")
//         quantity.innerHTML = products[p].quantity
//         quantity.classList.add("text-right")

//         let ppu = document.createElement("td")
//         ppu.innerHTML = products[p].ppu
//         ppu.classList.add("text-right")

//         let discount = document.createElement("td")
//         discount.innerHTML = products[p].discount
//         discount.classList.add("text-right")

//         let total = document.createElement("td")
//         total.innerHTML = products[p].ppu * products[p].quantity
//         total.classList.add("text-right")
//         gross += products[p].ppu * products[p].quantity
//         dsc += products[p].name * products[p].quantity
       


//         row.appendChild(productName)
//         row.appendChild(quantity)
//         row.appendChild(ppu)
//         row.appendChild(discount)
//         row.appendChild(total)
//         productList.appendChild(row)
//     }

//     let grossElem = document.getElementById("gross")
//     grossElem.innerHTML = gross

//     let vat = gross * 0.07
//     let net = gross + vat
//     let ttl = gross + vat
    
//     document.getElementById("vat").innerHTML = vat.toFixed(2)
//     document.getElementById("net").innerHTML = net.toFixed(2)
//     document.getElementById("ttl").innerHTML = ttl.toFixed(2)




// }




