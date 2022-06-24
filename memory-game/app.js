const cardArray = [


    {
        name: 'catgirl',
        img: 'img/catgirl.jpg'
    },

    {
        name: 'hermit ',
        img: 'img/hermit.jpg'
    },

    {
        name: 'mother',
        img: 'img/mother.png'
    },
    {
        name: 'self',
        img: 'img/self.jpg'
    },
    {
        name: 'trickster',
        img: 'img/trickster.jpg'
    },
    {
        name: 'father',
        img: 'img/father.jpg'
    },

    {
        name: 'sun',
        img: 'img/sun.jpg'
    },
    {
        name: 'moon',
        img: 'img/moon.jpg'
    }
    
]



function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getCard(element) {
    const card = document.createElement('img')
    
    //card.src = ("img/square.jpg")
    card.id = ++nextid;
    card.src = ("img/square.jpg")
    card.width= 200;
    card.matched = false;
    card.img = element.img;
    card.height = 200;
    card.value = `${element.name}`;
    card.className = `card ${element.name}`
    return card;
}

function DrawArray(array = currentArray) {
    let count = 0
    let row = document.createElement('div');
    row.className = "gridrow"
    array.forEach(element => {
        if (count==4) {
            row = document.createElement('div');
            row.className = "gridrow"
            count=0
        }
        
        row.append(getCard(element));
        //row.innerHTML.
        grid.append(row);
        count++;
    });
}

function createBoard(array = currentArray) {
    let count = 0;
    //Going to have a 4x4 board
    let row = document.createElement('div');
    row.className = "gridrow"

    
    array.forEach(element => {
        if (count==4) {
            row = document.createElement('div');
            row.className = "gridrow"
            count=0
        }
        const card = getCard(element);
        card.id=count;
        row.append(getCard(element));
        //row.innerHTML.
        grid.append(row);
        count++;
    });
    shuffle(array)
    DrawArray(array);
}


function updateElement(el){
    el.setAttribute('src',el.img);
}

/*function updateSelected(el,array = selected){
    
    if (array.length>1) {
        
        if (array[0][0] == array[1][0] && array[0][1] != array[1][1]) 
        //This is kind of ugly and not readable.
        //Next time make the selected array a javascript object instead
        {   console.log(array[0]);
            console.log(array[1]);
            const elements = document.querySelectorAll(`.${array[0][0]}`);
            elements.forEach(element => {
                element.src="img/match.jpg";
                element.matched = true;
            });
            score++;
            document.getElementById('score').innerHTML=(score)
            selected=[];
        }
        else {
            document.querySelectorAll(`.${array[0][0]}`).forEach(element => {
                element.setAttribute('src','img/square.jpg')
            })
            document.querySelectorAll(`.${array[1][0]}`).forEach(element => {   
                element.setAttribute('src','img/square.jpg')
                })
                

            selected=[];
           
           
            
        }
    }
} */
function updateView(element) {
    element.setAttribute('src',element.img);
}

function  updateSelected() {
    selected.push(element);
    console.log(selected[0]);
    selected[0].setAttribute("src",selected[0].img)
    if (selected.length>1 ) {
        if (selected[0].value == selected[1].value && selected[0].id != selected[1].id) {
                score++;
                document.getElementById('score').innerHTML=(score);
                selected[0].matched=true
                selected[0].src="img/match.jpg"
                selected[1].matched=true
                selected[1].src="img/match.jpg"
                selected=[]
                console.log(selected)
            
        }
        else {
            selected[0].src = "img/square.jpg"
            selected[1].src = "img/square.jpg"

            selected=[];
            
        }
    }
}


function click() {
    console.log
    updateSelected();
    

}
let element = null;
let nextid = 0;
let score = 0;
let selected = [];
currentArray = shuffle(cardArray);
const grid = document.querySelector('#grid');
createBoard()
const scoreBoard = document.getElementById('#score')
const cards = document.querySelectorAll(".card")

cards.forEach(el => el.addEventListener('click', event => {
    element=el;
    //console.log(el.img)
    if (el.matched) {
        return false;
    }
    updateView(el);
    setTimeout(function(){
        click()
    }, 300);
    


}))

console.log(cards[0])
