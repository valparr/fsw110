//Create H1 with the text “Welcome to my JS site”
//P with the text “All of this was created with Javascript”
//-----------------------
//An Ordered list (ol) with at least three items (li).
//Each li should also display text. Remember, you will need to first add the li’s to the ol before putting the ol on the DOM.

//h1:
var newH1 = document.createElement("h1")
newH1.textContent = "Welcome to my JS site"
var myheading = document.getElementById("heading")
myheading.append(newH1)

//p:
var newP = document.createElement("p")
newP.textContent = "All of this was created with Javascript"
var myText = document.getElementById("text")
myheading.append(newP)

//ol with three li:
var newLi = document.createElement("li")
newLi.textContent = "This is an awesome list item"
var myOrderLi = document.getElementById("order-list")
myOrderLi.append(newLi)

var newLi = document.createElement("li")
newLi.textContent = "This is a super cool list item"
var myOrderLi = document.getElementById("order-list")
myOrderLi.append(newLi)

var newLi = document.createElement("li")
newLi.textContent = "This is my favorite list item"
var myOrderLi = document.getElementById("order-list")
myOrderLi.append(newLi)
