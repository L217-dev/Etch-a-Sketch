const container = document.querySelector("#container");
const button=document.querySelector("button")
const clean=document.querySelector('.clean')

function createLine(squareNumber) {
    const newLine=document.createElement('div');
    newLine.id='line';
    container.appendChild(newLine);
    
    function squareCreation() {
        const newDiv = document.createElement('div');
        newDiv.className = 'square';
        newLine.appendChild(newDiv);
    }
    
    for (let i=0;i<squareNumber;i++){
        squareCreation()
    }
}

function createGrid(lineNumber,squareNumber){
    for (let i=0; i<lineNumber; i++){
        createLine(squareNumber)
    }

}
function cleanGird(){
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child=container.lastElementChild;
    }
}

function changeGridSize(){
    const newSize=Number(prompt("how many square would you like for the new grid"))
    if (newSize<=100) {
        cleanGird()
        createGrid(newSize,newSize)
        paintSquare()
    }else {
        return none
    }

    
 
    
}

function paintSquare(){
    document.querySelectorAll('.square').forEach(square => {
        square.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor="white";
        });
    });
}

function resetColor(){
    document.querySelectorAll('.square').forEach(square => {
        square.style.backgroundColor="powderblue"
    })
}





createGrid(16,16)
paintSquare()

button.addEventListener("click",changeGridSize)
clean.addEventListener("click",resetColor)
