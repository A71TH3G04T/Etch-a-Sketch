let gridSize = 6;
let containerWidth = 300;
const container = document.querySelector("#container");
container.style.width = containerWidth + "px";

let sizeBtn = document.getElementById("gridSize");
sizeBtn.addEventListener("click", () => {
  let tempGridSize = prompt("Enter any number between 1-100");
  if (tempGridSize > 0 && tempGridSize <= 100) {
    gridSize = tempGridSize;
    RenderSetchBoard();
  } else alert("Please enter a valid number");
});

let clearGridBtn = document.getElementById("clearGrid");
clearGridBtn.addEventListener("click", () => {
  RenderSetchBoard();
});

function RenderSetchBoard() {
  let itemSize = calcHeightWidth() + "px";
  container.innerHTML = "";

  // this loop creates all the rows
  for (let x = 0; x < gridSize; x++) {
    createRow();
  }

  function createRow() {
    for (let i = 0; i < gridSize; i++) {
      const creatingDiv = document.createElement("div");
      creatingDiv.style.width = itemSize;
      creatingDiv.style.height = itemSize;
      container.appendChild(creatingDiv);
      creatingDiv.addEventListener("mousedown", (event) => {
        colorDiv(creatingDiv, event.buttons);
      });
      creatingDiv.addEventListener("mouseover", (event) => {
        colorDiv(creatingDiv, event.buttons);
      });
    }
  }

  function colorDiv(div, button) {
    if (button === 1) {
      div.style.backgroundColor = "black";
    }
  }

  function calcHeightWidth() {
    let noOfItems = gridSize;
    let result = containerWidth / noOfItems;
    return result;
  }
}

RenderSetchBoard();
