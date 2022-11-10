var i = 0, text;
text = "Titulo de Ejemplo";

function typing() {
    if(i < text.length){
        document.getElementById("main-title").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
typing();