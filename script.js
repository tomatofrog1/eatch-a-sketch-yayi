const container = document.querySelector('.container');
let row;


function createGrid(rnc) {
    const div = document.createElement('div')
    div.classList.add('div')

    for (let i = 0; i < rnc; i ++) {
        container.appendChild(div.cloneNode(true))
        
        
    }
    row = document.querySelectorAll('.div')

    for (let i = 0; i < rnc; i++) {
        for (let i = 0; i < rnc; i++) {
            row[i].appendChild(div.cloneNode(true))
            
        }
        
    }
}

window.onload = createGrid(16)

//hover effect 
const allDiv = document.querySelectorAll('.container>div>div')
for (let i = 0; i < allDiv.length; i++) {
    allDiv[i].addEventListener('mouseover', function handleMouseOver() {
        allDiv[i].style.backgroundColor = 'black'
    })
}

