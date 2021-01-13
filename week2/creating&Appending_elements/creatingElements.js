//Create H1 with the text “Welcome to my JS site”
//P with the text “All of this was created with Javascript”
//-----------------------
//An Ordered list (ol) with at least three items (li).
//Each li should also display text. Remember, you will need to first add the li’s to the ol before putting the ol on the DOM.

//h1:
var h1 = document.createElement("h1")
h1.innerHTML = "Welcome to my JS site"
document.body.append(h1)

//p:
var p = document.createElement("p")
p.innerHTML = "All of this was created with Javascript"
document.body.append(p)

//ol with three li:
var ol = document.createElement("ol")
ol.innerHTML = "My Favorite Foods"
document.body.append(ol)

var li = document.createElement("li")
li.innerHTML = "Tacos"
ol.appendChild(li)

var li = document.createElement("li")
li.innerHTML = "Shrimp Alfredo"
ol.appendChild(li)

var li = document.createElement("li")
li.innerHTML = "Pan- Seared Salmon"
ol.appendChild(li)

var li = document.createElement("li")
li.innerHTML = "Chicken n Waffles"
ol.appendChild(li)