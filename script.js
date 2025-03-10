var container = document.querySelector("#container"); // Fixed ID

for (let i = 0; i < 36; i++) {
    var creatingDiv = document.createElement("div");
    container.appendChild(creatingDiv);
}

let allDivs = document.querySelectorAll("#container div"); 

for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].addEventListener("mousedown", (event) => {
        if (event.buttons===1) {  
            allDivs[i].style.backgroundColor = "black";  
        }  
    });

    allDivs[i].addEventListener("mouseover", (event) => {  
        if (event.buttons===1) {  
            allDivs[i].style.backgroundColor = "black";  
        }  
    });  
}
