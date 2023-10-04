const grid = document.querySelector('.grid');



function createGrid(rnc) {
    let colummn;
    const div = document.createElement('div')
    div.classList.add('div')

    for (let i = 0; i < rnc; i ++) {
        grid.appendChild(div.cloneNode(true))
        
        
    }
    colummn = document.querySelectorAll('.div')

    for (let i = 0; i < rnc; i++) {
        for (let i = 0; i < rnc; i++) {
            colummn[i].appendChild(div.cloneNode(true))
            
        }
        
    }
}



//hover effect 
function hoverEffect() {
    const allDiv = document.querySelectorAll('.grid>div>div')
    for (let i = 0; i < allDiv.length; i++) {
    allDiv[i].addEventListener('mouseover', function handleMouseOver() {
        allDiv[i].style.backgroundColor = 'black'
    })
}
}


//change grid size

const goButton = document.querySelector('#goBtn')
const gridSize = document.querySelector('#gridSize')

goButton.addEventListener('click', function() {
    if (num)
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild)
        
    }

    createGrid(Number(gridSize.value))
    hoverEffect()
})


window.onload = createGrid(16); hoverEffect()