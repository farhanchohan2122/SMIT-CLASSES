
// var obj1 = {
//     stdName : 'Subhan',
//     rollNum : 12,
//     class : 'Five',
//     age : 10
// }

// document.write(obj1.stdName, obj1.class, obj1.age);
// document.write(obj1)
// console.log(obj1);
// console.log(document)

// for(var key in obj1){
//     document.write(key + " : " + obj1[key] + "<br>");
// } 



// var obj1 = {
//     stdName : 'Subhan',
//     rollNum : 12,
//     class : 'Five',
//     age : 10
// }

// var newStd = 'saleem';

// obj1.stdName = newStd;

// console.log(obj1);


var plan1 = {
    name: "Basic",
    price: "Price: 3.99",
    space: "Space: 100",
    transfer: "Transfer: 1000",
    pages: "Pages: 10"
}

var plan2 = {
    name: "Professional",
    price: "Price: 5.99",
    space: "Space: 500",
    transfer: "Transfer: 5000",
    pages: "Pages: 50"
}

var plan3 = {
    name: "Ultimate",
    price: "Price: 9.99",
    space: "Space: 2000",
    transfer: "Transfer: 20000",
    pages: "Pages: 500"
}

document.getElementById("Name1").innerHTML = "Name: " + plan1.name
document.getElementById("Price1").innerHTML = plan1.price
document.getElementById("Space1").innerHTML = plan1.space
document.getElementById("Transfer1").innerHTML = plan1.transfer
document.getElementById("Pages1").innerHTML = plan1.pages

document.getElementById("Name2").innerHTML = "Name: " + plan2.name
document.getElementById("Price2").innerHTML = plan2.price
document.getElementById("Space2").innerHTML = plan2.space
document.getElementById("Transfer2").innerHTML = plan2.transfer
document.getElementById("Pages2").innerHTML = plan2.pages

document.getElementById("Name3").innerHTML = "Name: " + plan3.name
document.getElementById("Price3").innerHTML = plan3.price
document.getElementById("Space3").innerHTML = plan3.space
document.getElementById("Transfer3").innerHTML = plan3.transfer
document.getElementById("Pages3").innerHTML = plan3.pages 


