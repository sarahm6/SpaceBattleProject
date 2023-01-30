class SpaceShip{
    constructor(name, hull, firepower, accuracy, id){
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attack(enemy) {
        if(Math.random() < this.accuracy){
            enemy.hull =  enemy.hull - this.firepower;
            console.log(`You have been hit by ${this.name}! Current hull is ${this.hull}`);
        } else {
            console.log("Missed!")
        }
    }
}


let me = new SpaceShip("USS HelloWorld", 20, 5, 0.7);
console.log(me);

const randomNumInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
  };
//function for random decimal number for alien accuracy
const randomDecimalInRange = (min, max) => {
    return Number((Math.random() * (max - min) + min).toFixed(1));

}

class AlienShips{
    constructor(name) {
        this.name= name;
        this.ships = [];
    }


    addShip(name, id) {
        let hull = randomNumInRange(3,6);
        let firepower = randomNumInRange(2,4);
        let accuracy = randomDecimalInRange(.6,.8);

        let newShip = new SpaceShip (name, hull, firepower, accuracy, id);
        this.ships.push(newShip);
    }
}


let alienSpecies = new AlienShips("Volorean");

alienSpecies.addShip("Enemy Ship 1", 0);
alienSpecies.addShip("Enemy Ship 2", 1);
alienSpecies.addShip("Enemy Ship 3", 2);
alienSpecies.addShip("Enemy Ship 4", 3);
alienSpecies.addShip("Enemy Ship 5", 4);
alienSpecies.addShip("Enemy Ship 6", 5);

console.log(alienSpecies);
// Loop through HTML alien ships
// Start looping

const htmlShips = document.querySelectorAll(".Enemy-Ship")

// hull is index 2


htmlShips.forEach((individualShip, index) =>{
individualShip.children.item(2).textContent = `Hull: ${alienSpecies.ships[index].hull}`;


// firepower is index 3
individualShip.children.item(3).textContent = `Firepower: ${alienSpecies.ships[index].firepower}`;


//accuracy is index 4
individualShip.children.item(4).textContent = `Accuracy: ${alienSpecies.ships[index].accuracy}`;

})

//Loop through HTML ships to display my stats (hull, firepower, accuracy)
const htmlMainShip = document.querySelector(".my-ship");
const hullOfUSS = document.getElementById("USS-hull")

// console.log(htmlMainShip.children);
// htmlMainShip.item(2).textContent=`Hull:  ${me.hull}`;
// htmlMainShip.item(3).textContent=`Firepower:${me.firepower}`;
// htmlMainShip.item(4).textContent=`Accuracy: ${me.accuracy}`;


const savePlanet = () => {
console.log("STARTING BATTLE")
    let ships = alienSpecies.ships;

    
    for (let i = 0; i < ships.length; i++) {
        console.log("Starting loop for " , ships[i])
        if (me.hull < 1) {
            console.log(me.hull, "GAME OVER!");
            break;
        } else if  (alienSpecies.hull <= 0) {
           console.log("GAME OVER!");
        }

        let keepLooping = true;
            while (keepLooping) {
            me.attack(ships[i]);
            console.log(ships[i], "was hit! Hull is now" , ships[i].hull);
            // Reset hull html of alien
            htmlShips[i].children.item(2).textContent = `Hull: ${ships[i].hull}`;

            if (ships[i].hull <= 0) {
                console.log("Ship is destroyed!")
                keepLooping = false;
                break;
            } 
                ships[i].attack(me);
                hullOfUSS.textContent = `Hull: ${me.hull}`;
                console.log("Attacked")
            
            

            // Alien attacks me
            // ships[i].attack(me);
            // console.log(`${me.name} was destroyed!`);


            // See if I am alive
            if (me.hull <= 0) {
                console.log(`${me.name} was destroyed!`);
  
                // End for loop by setting i to ships.length
                i = ships.length 
                keepLooping = false;
                break;
            }
        }
    }
    console.log("Done with looping through ships")
}
let startButton = document.getElementById("Start-Game")

startButton.addEventListener("click", () => {
    console.log("clicked")
    savePlanet();
})


console.log(me);
console.log(alienSpecies);