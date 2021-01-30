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
var className = document.querySelector('body').className += "border";
console.log(className);

//classList
document.querySelector('body').classList.add("border"[0]);
console.log(document.querySelector(".border").className);
document.querySelector(".border").classList.add(".border");


