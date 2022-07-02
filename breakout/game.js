const grid = document.querySelector(".grid");
const blockWidth = 100;
const blockHeight = 20;

class Projectile {
    constructor(x,y) {
        this.x = undefined;
        this.y = undefined;
    }
}

class Player {
    constructor() {
        this.rightPressed=false;
        this.leftPressed=false;
        this.spacePressed=false;
        this.x = 100;
        this.y = 0;
        this.ship = document.querySelector(".player");
        console.log(this.ship)
    }
    shootProjectile() {
        let projectile = document.createElement("div");
        projectile.classList.add("projectile");
        projectile['x'] = this.x+8;
        projectile['y'] = this.y+50;
        projectile.style.left=`${this.x+8}px`;
        projectile.style.bottom=`${this.y}px`
        grid.appendChild(projectile);
    }
}


let player = new Player();


document.addEventListener("keydown", event => {
    if (event.key == "ArrowRight") {
        player.rightPressed = true;
    }
    if (event.key == "ArrowLeft") {
        player.leftPressed = true;
        console.log(player.leftPressed)
    }
    if (event.key == " ") {
        player.spacePressed = true;
        player.shootProjectile();
        console.log("space")
    }
})

class Block {
    constructor(x,y) {
        this.bottomLeft = [x,y];
        this.bottomRight = [x+blockWidth,y];
        this.topLeft = [x,y+blockHeight];
        this.topRight = [x+blockWidth,y+blockHeight];
    }
}



const blocks = [
   
   
];
for (let i=0; i<5;i++) {
    for (let j=0; j<3; j++) {
        blocks.push(new Block(10+120*i,240-30*j))
    }
}

function addBlocks() {
    for (let i=0; i < blocks.length; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        block.x = blocks[i].bottomLeft[0];
        block.y = blocks[i].bottomLeft[1];
        block.style.left=`${blocks[i].bottomLeft[0]}px`;
        block.style.bottom=`${blocks[i].bottomLeft[1]}px`;
        grid.appendChild(block);
    }
}
//A more efficient way of computing this would be to create a collision map.
//Based on the position of entities, a collision map
//Which is a 2D array could be generated,
//Each element in the array would either be 0, or a 
//Datum telling what entity is where in the gamemap.

function updateEntities() {
    let blocksElem = Array.from(document.querySelectorAll(".block"));
    let projectiles = Array.from(document.querySelectorAll(".projectile"));
    projectiles.forEach(projectile => {
        projectile['y'] +=5;
        projectile.style.bottom=`${projectile['y']}px`
        blocksElem.forEach(block => {
            console.log(block.y);
            console.log(projectile.y)
            if (projectile['y']+15 > block['y'] && projectile.x+15 > block.x && projectile.x-15 < block.x+blockWidth) {
               grid.removeChild(projectile);
               grid.removeChild(block);
            }
        });
        if (projectile['y'] > 300) {
            grid.removeChild(projectile);
        }
    });
}

function updateGame() {
    console.log("ran update");
    if (player.rightPressed) {
        console.log("updating")
        player.x +=10;
        player.ship.style.left = `${player.x}px`
        player.rightPressed = false;
    }
    if (player.leftPressed) {
        player.x -=10;
        player.ship.style.left = `${player.x}px`
        player.leftPressed = false;
    }

    updateEntities();

}

let gameLoop = setInterval(updateGame,60);

addBlocks();
