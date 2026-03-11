const text = "Aspiring Software Developer | Web Development Enthusiast";
let index = 0;

function type() {
if(index < text.length){
document.querySelector(".typing").innerHTML += text.charAt(index);
index++;
setTimeout(type,50);
}
}

type();