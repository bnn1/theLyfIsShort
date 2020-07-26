const container = document.querySelector("#container");
let gridCellsAge = [];
let gridCellsLifespan = []
window.onload = makeGrid(0, 80);
function makeGrid(age, lifespan) {
  gridCellsAge = [];
  gridCellsLifespan = []

  container.innerHTML = '';
  for (let i = 0; i < age; i++) {
    gridCellsAge.push('div');
  }
  gridCellsAge.forEach((cell) => {
    for (let i = 0; i < 52; i++) {
      let gridCell = document.createElement("div");
      gridCell.style.backgroundColor = 'lightseagreen'
      container.appendChild(gridCell);
    }
  })
  for (let i = 0; i < (lifespan - age); i++) {
    gridCellsLifespan.push('div');
  }
  gridCellsLifespan.forEach((cell) => {
    for (let i = 0; i < 52; i++) {
      let gridCell = document.createElement("div");
      container.appendChild(gridCell);
    }
  })

}

const submit = document.querySelector("form input[type='button']")
submit.addEventListener('click', () => {
  const age = document.getElementById("age").value;
  const lifespan = document.getElementById("avgLifeSpan").value;
  makeGrid(age, lifespan);
})