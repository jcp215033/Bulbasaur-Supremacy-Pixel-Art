/* Step 0: Adding the header and main*/
const bodyElement = document.body;

//create children of body 
const headerElement = document.createElement("h1")
const mainElement = document.createElement("main")

//modified the element(s)
headerElement.innerText = "My Pixel Art: #001 in the dex and #001 in my heart"

//added both elements to our DOM
bodyElement.append(headerElement, mainElement)
//double digit index makes formatting harder so using variables
let x = 10; 
let y = 11;
let a = 12;
let b = 13;
let c = 14;
/* Step 2: matrix, colors array, and iteration */
let checkerColors = ['white', '#c81e42', 'black', '#5b6f36', '#60b530', '#97db3f', '#a1f975', '#195a59', '#199f9f', '#15f0ca', '#1a8282', '#13c2a6', 'lightGrey', 'red', '#ff7971']
let checkerMatrix = [
  [0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0],
  [0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 3, 0, 0,0, 0, 0, 0, 0,0],
  [0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,3, 3, 5, 2, 2,0, 0, 0, 0, 0,0],
  [0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 4, 4, 4,4, 3, 3, 3, 3,5, 4, 4, 3, 4,2, 0, 0, 0, 0,0],
  [0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,4, 4, 6, 6, 6,6, 6, 6, 5, 5,5, 4, 5, 3, 4,2, 0, 0, 0, 0,0],
  [0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 4,6, 6, 6, 6, 6,6, 6, 6, 6, 4,4, 5, 5, 4, 3,2, 0, 0, 0, 0,0],
  [0,0, 0, 0, 7, 7,0, 0, 0, 0, 0,0, 0, 0, 4, 6,6, 6, 6, 6, 7,2, 4, 4, 4, 6,5, 5, 5, 4, 3,2, 0, 0, 0, 0,0],
  [0,0, 0, 8, 9, 9,7, 7, 0, 8, 8,8, 8, 8, 8, 8,8, 8, 7, 7, 9,y, 2, 6, 6, 6,6, 5, 5, 5, 3,4, 2, 0, 0, 0,0],
  [0,0, 0, 8, 9, 9,9, 8, 8, 9, 9,9, 9, 9, y, y,y, 7, 9, 9, 9,y, 2, 6, 6, 6,6, 5, 5, 5, 3,4, 4, 2, 0, 0,0],
  [0,0, 0, 8, 9, 7,9, 9, 9, 9, 9,8, 8, 8, 9, y,y, 9, 9, 9, y,y, 2, 6, 6, 6,6, 5, 5, 5, 4,3, 4, 2, 0, 0,0],
  [0,0, 0, 8, x, 9,9, 9, 9, 9, 8,8, 8, 8, 9, 9,y, y, y, y, y,y, 8, 2, 6, 6,6, 5, 5, 5, 4,3, 4, 4, 2, 0,0],
  [0,0, 0, x, 9, 9,9, 9, 9, 8, 8,8, 8, 9, 9, 9,y, y, y, y, y,y, 8, 2, 6, 6,5, 5, 5, 5, 4,4, 3, 4, 2, 0,0],
  [0,0, 0, x, 9, 9,9, 9, 9, 8, 8,8, 9, 9, 9, 9,y, 8, 8, y, y,y, 8, 2, 6, 5,5, 5, 5, 4, 4,4, 3, 4, 4, 2,0],
  [0,0, x, 7, 9, y,9, 9, 9, 9, 9,9, 9, 9, y, 9,7, a, a, 7, y,8, 8, 8, 2, 5,5, 5, 4, 4, 4,4, 3, 4, 4, 2,0],
  [0,0, 7, b, x, 9,y, 9, 9, 9, 8,8, 9, y, 9, 7,b, 1, 0, a, 7,8, 8, 8, 2, 7,4, 4, 4, 4, 4,4, 3, 4, 4, 2,0],
  [0,0, 7, b, x, 9,y, 9, 9, 8, 8,8, 9, y, 9, 7,b, 1, 0, 0, 7,8, 8, 8, 2, 7,4, 4, 4, 4, 4,3, 4, 4, 4, 2,0],
  [0,x, a, b, 0, x,9, 9, 9, 8, 8,9, 9, 9, 8, b,0, 1, 1, 0, a,8, 8, 8, 7, 8,7, 4, 4, 4, 4,3, 4, 4, 4, 2,0],
  [0,x, 0, 1, 0, x,y, 9, 9, 9, 9,9, 9, y, 8, 1,0, c, c, 0, a, 8, 8, x, 8,8, 7, 4, 4, 3,4, 4, 4, 4, 2, 0,0],
  [0,x, y, 1, 1, x,0, y, y, y, y,y, y, y, 8, 1,1, c, c, a, 8,8, 8, 8,8, 8,8, 8, 7, 7, 4,4, 4, 4, 2, 0,0],
  [0,7, 2, y, y, y,y, y, y, y, y,y, y, y, y, y,y, y, y, y, y,7, 8, 8, 8, 8,8, 8, 8, 8, 7,4, 4, 2, 0, 0,0],
  [0,7, 8, 2, y, y,y, x, y, y, 7,y, y, y, y, y,y, x, 7, 2, 2,8, 8, x, 8, 8,8, 7, 7, 8, 8,7, 2, 0, 0, 0,0],
  [0,0, 7, 8, 0, 1,1, y, y, y, y,y, y, y, 2, 2,2, 0, x, 8, 8,8, 8, 7, 8, 8,8, 7, 7, 7, 8,8, 7, 0, 0, 0,0],
  [0,0, 0, 7, 8, 8,x, 1, 1, 1, 1,1, 1, 1, 1, 1,1, x, 8, 8, 8,8, 7, 8, 8, 8,8, 8, 7, 7, 8,8, 8, 7, 0, 0,0],
  [0,0, 0, 0, 7, 7,8, 8, x, 1, b,c, c, c, c, x,8, 8, 8, 8, 2,2, 8, 8, 8, 8,8, x, 8, 8, 8,8, 8, 7, 0, 0,0],
  [0,0, 0, 0, 0, 0,2, 2, 8, 8, 8,8, 8, 8, 8, 8,8, 2, 2, 2, 8,8, 8, x, 8, 8,7, 8, 8, 8, 7,8, 8, 8, 2, 0,0],
  [0,0, 0, 0, 0, 0,7, 8, 2, 2, 2,2, 2, 2, 2, 2,2, 8, 8, 8, 8,8, 8, 7, 8, 8,2, 8, 8, 7, 7,7, 8, 8, 2, 0,0],
  [0,0, 0, 0, 0, 0,8, y, y, y, 8,7, 8, 8, 8, 8,8, 8, 8, y, y,8, 8, 8, 7, 2,8, 8, 8, 7, 7,7, 8, 8, 2, 0,0],
  [0,0, 0, 0, 0, 0,0, 7, 8, y, y,8, 7, 8, 8, 8,8, 8, 7, 8, y,y, 8, 8, 7, 2,8, 8, 8, 7, 7,7, 8, 8, 2, 0,0],
  [0,0, 0, 0, 0, 0,0, 7, 8, y, y,8, 8, 2, 8, 8,8, 7, 8, 8, 8,y, 8, 8, 7, 2,8, 8, 8, 8, 7,8, 8, 2, 0, 0,0],
  [0,0, 0, 0, 0, 0,0, 7, 8, y, y,y, 8, 8, 2, 2,2, 7, y, 8, 8,y, 8, 8, 7, 0,2, 8, 8, 8, 8,, 8, 2, 0, 0,0, 0],
  [0,0, 0, 0, 0, 0,0, 8, y, y, y,y, 8, 8, 2, 0,0, x, y, y, y,y, 8, 2, 0, 0,7, 0, 7,0, 7,0, 7, 0, 0, 0,0],
  [0,0, 0, 0, 0, 0,0, 0, 8, y, 8,y, 8, 8, 2, 0,0, x, y, 8, y,8, 8, 2, 0, 0,0, 2, 2, 2, 2,2, 0, 0, 0, 0,0],
  [0,0, 0, 0, 0, 0,0, 7, 0, 7, 0,7, 8, 2, 0, 0,7, 0, 7, 0, 7,0, 2, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0],
  [0,0, 0, 0, 0, 0,0, 0, 2, 2, 2,2, 2, 0, 0, 0,0, 2, 2, 2, 2,2, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0],
  [0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0],
  [0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0]
]

/* Step 3: Write a function to draw any matrix with colors*/

checkerMatrix.forEach((row) => {
  console.log(row)
  const rowElement = document.createElement("div")
  rowElement.className = "row"  
  mainElement.append(rowElement)

  row.forEach(value => {
    console.log(value)
    const square = document.createElement("div")
    square.style.backgroundColor = checkerColors[value]
    rowElement.append(square)
  })
})
