window.onload = function () {
    const header = document.getElementById("text");
    const speedOriginal = document.getElementById("speed");
    const text = "This is some random text...";
    let direction = "write";

    let idLetter = 1;

    // replace the number 5 with variable speedOriginal and display HTML input for changing its speed
    let delay = 500 / 5; 
    printText();


    function printText() {
        header.innerText = text.slice(0, idLetter);
        header.style.color = "#F3A712";
        if (direction == "write") {
            idLetter++;
        }
        if (text.length == (idLetter - 1)) {
            //idLetter = 1;
            direction = "write-back";
        }
        if (direction=="write-back"){
            idLetter--;
            header.innerText = text.slice(0, idLetter);
            if (idLetter==0){
                direction="write";
            }
        }
        setTimeout(printText, delay);
    };

    
    speedOriginal.addEventListener("input", function (event) {
        delay = 500 / event.target.value;
    });
    

}

