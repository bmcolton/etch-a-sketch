const container = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    newGrid = document.createElement("div");
    newGrid.className = "grid-cell";
    newGrid.id = i + "-" + j;
    newGrid.style.gridRow = (i + 1) + '/' + (i + 2);
    newGrid.style.gridColumn = (j + 1) + '/' + (j + 2);
    newGrid.addEventListener('mouseenter', function(e) {
      e.target.style.backgroundColor = "blue";
    });
    newGrid.addEventListener('mouseleave', function(e) {
      e.target.style.backgroundColor = "";
      e.target.style.transitionDelay = "1s";
      e.target.style.transitionDuration = "1s, 1s";
    });
    container.appendChild(newGrid);
  }
}
