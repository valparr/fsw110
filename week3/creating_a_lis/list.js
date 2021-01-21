

var h1 = document.createElement("h1")

for (var i = 0; i < 10; i++){
    var h1 = document.createElement("h1");
    h1.innerHTML = "Hello World";
    document.body.appendChild(h1);
    h1.style.backgroundColor = "yellow";
}

//Create a new array using the following information:

const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick" ," emily"];

for (var i = 0; i < names.length; i++){
    var nameArray = document.createElement("li");
    nameArray.innerHTML = names[i];
    document.body.appendChild(nameArray);

}