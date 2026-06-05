let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name,price){

cart.push({
name,
price
});

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

alert(name + " added to cart");
}

function loadCart(){

let cartData=
JSON.parse(localStorage.getItem("cart")) || [];

let html="";
let total=0;

cartData.forEach(item=>{

html+=`
<tr>
<td>${item.name}</td>
<td>₹${item.price}</td>
</tr>
`;

total+=item.price;

});

document.getElementById("cartBody").innerHTML=html;
document.getElementById("total").innerHTML="₹"+total;
}
