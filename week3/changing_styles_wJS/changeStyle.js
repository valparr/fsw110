var h2 = document.createElement("h2")

for (var i = 0; i < 5; i++){
    var h2 = document.createElement("h2");
    h2.innerHTML = "Changing Styles and Classes using JS";
    document.body.appendChild(h2);
    h2.style.fontSize = "20px";
    h2.style.fontWeight = "lighter";
    h2.style.fontFamily = "san-serif";
    h2.style.color = "cornflowerblue";
}

//className
var className = document.querySelector("#heading").className += " new-class"
console.log(className)

//classList
document.querySelector("#header").classList.add("class-new")
console.log(document.querySelector("#header").className)
document.querySelector("#header").classList.add("class-new")