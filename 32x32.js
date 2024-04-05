const grid = document.querySelector(".container");

function makeGrid() {
  for(let i = 0; i<32; i++) {
    for (let j = 0; j < 32; j++) {
      const cell = document.createElement("div");

      cell.classList.add("cell");
      grid.appendChild(cell);

      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "red";

      })

      const reset = document.querySelector("#reset");

      reset.addEventListener("click", () => {
        cell.style.backgroundColor = "white";

      })
    }
  }
}

makeGrid();