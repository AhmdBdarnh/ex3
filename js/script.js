var size = 60;
let Box1 = null;
let Box2 = null;
counter = 0;


window.onload = () => {
 
    for (var i = 0; i < 7; i++) {
        size = createBox(size);
    }
    
}


function createBox(previous) {
    counter++;
    var newSize = previous + 20; 
    var box = document.createElement("div"); 
    box.style.width = newSize + "px"; 
    box.style.height = newSize + "px"; 
    box.style.backgroundColor = "#000000"; 
    box.style.marginRight = "132px";
    box.style.marginTop = "123px";
    box.style.display = "flex";
    box.style.alignItems = "center";

    var letter = document.createElement("p"); 
    letter.innerHTML =  String.fromCharCode(65 + Math.floor(Math.random() * 26));
    letter.style.color = "white";
    letter.style.fontSize = "64px";
    letter.style.textAlign = "center";
    letter.style.margin = "0 auto";
    letter.style.visibility = "hidden";
    box.appendChild(letter);

    box.addEventListener("click", function() {
        if (Box1 === null) {
            Box1 = box;
            letter.style.visibility = "visible";
        } 
        else if (Box2 === null && Box1 !== box) {
            Box2 = box;
            letter.style.visibility = "visible";
            if (Box1.firstChild.innerHTML === Box2.firstChild.innerHTML) {
                var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                Box1.style.backgroundColor = randomColor;
                Box2.style.backgroundColor = Box1.style.backgroundColor;
                Box1.firstChild.style.visibility = "visible";
                Box2.firstChild.style.visibility = "visible";
                Box1 = null;
                Box2 = null;

            } 
            else {
                setTimeout(function() {
                    Box1.firstChild.style.visibility = "hidden";
                    Box2.firstChild.style.visibility = "hidden";
                    Box1 = null;
                    Box2 = null;
                }, 500);
            }
            
        }
    });

    document.getElementsByClassName("boxes-layout3")[0].appendChild(box); 

    return newSize; 
}


 function layout3header() {
        if (counter == 9){
        return;
    }
    else {
        for (var i = 0; i < 2; i++) {
            size = createBox(size);
        }
    }
  };
