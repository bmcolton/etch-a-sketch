const container = document.querySelector(".container");
const button16 = document.querySelector(".navButton1");
const button64 = document.querySelector(".navButton2");
const button128 = document.querySelector(".navButton3");


createGrid(16,16);

button16.addEventListener("click", function() {newRender(16)});
button64.addEventListener("click", function(){newRender(64)});
button128.addEventListener("click", function(){newRender(128)});


function newRender(size) {
  container.textContent = "";
  createGrid(size, size);
}

function createGrid(rows, cols) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      newGrid = document.createElement("div");
      newGrid.className = "grid-cell";
      newGrid.id = i + "-" + j;
      newGrid.style.gridRow = (i + 1) + '/' + (i + 2);
      newGrid.style.gridColumn = (j + 1) + '/' + (j + 2);
      newGrid.addEventListener('mouseenter',
      function(e) {
        e.target.className = "active-cell";
      });
      // newGrid.addEventListener('mouseleave',
      // function(e) {
      //   setTimeout(function(e) {
      //     e.target.className = "grid-cell"
      //   }, 1000, e);
      // });
      container.appendChild(newGrid);
    }
  }
}
