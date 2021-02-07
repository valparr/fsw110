var totalButton = document.getElementById("buttonTotal");



function getPrice() {
var lollipopPrice = document.getElementById("lollipop").value;
var taffyPrice = document.getElementById("taffy").value;
var skittlesPrice = document.getElementById("skittles").value;

var result = parseInt(lollipopPrice * 2) + parseInt(taffyPrice * 4) + parseInt(skittlesPrice * 7);

alert(`Your Candy Shop total is ... \n${result} dollars.\nThank you for shopping with us!`);
}