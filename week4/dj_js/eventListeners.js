

var div = document.createElement("div");
document.body.appendChild(div);
div.style.border = "4px solid black";
div.style.padding = "350px";
div.style.margin = "0px, 0px, 0px";
div.style.marginRight = "25%"
div.style.backgroundColor = "beige";






document.addEventListener('mouseover', function(){
    div.style.background = "blue"
    console.log("You hovered over me!")
    });


document.addEventListener('mouseout', function(){
    div.style.background = "beige"
    console.log("You hovered over me!")
    });
    
document.addEventListener('mousedown', function(){
    div.style.background = "red"
    console.log("Hold mouse down")
    });
        
document.addEventListener('mouseup', function(){
    div.style.background = "yellow"
    console.log("let mouse go")
    });
        

document.addEventListener('dblclick', function(){
    div.style.background = "green"
    console.log("You double clicked me!")
    });
        
document.addEventListener('mouseover', function(){
    body.style.backgroundColor = "orange"
    console.log("You hovered over me!")
    });
        
       
        