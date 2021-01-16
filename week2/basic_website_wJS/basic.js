var navBar = document.createElement('nav')
document.body.append(navBar)

var nav1 = document.createElement('a')
nav1.innerHTML = '  Home    '
navBar.appendChild(nav1)

var nav2 = document.createElement('a')
nav2.innerHTML = '  About  '
navBar.appendChild(nav2)

var nav3 = document.createElement('a')
nav3.innerHTML = '  Contact   '
navBar.appendChild(nav3)

var h1 = document.createElement("h1")
h1.innerHTML = "My Wonderful Web Dev Journey"
document.body.append(h1)

var p = document.createElement("p")
p.innerHTML = "This is my paragraph section where I would describe how awesome coding websites is! I never knew learning new coding languages would be soo frustrating and fun at the same time!! I love how javaScript makes it possible to create this element with using only JS."
document.body.append(p)

var ul = document.createElement("ul")
ul.innerHTML = "SO FAR I'VE LEARNED:"
document.body.append(ul)

var li = document.createElement("li")
li.innerHTML = "Coding with HTML5"
ul.appendChild(li)

var li = document.createElement("li")
li.innerHTML = "Styling with CSS"
ul.appendChild(li)

var li = document.createElement("li")
li.innerHTML = "Document Object Model (DOM)"
ul.appendChild(li)

var li = document.createElement("li")
li.innerHTML = "JavaScript Functions"
ul.appendChild(li)