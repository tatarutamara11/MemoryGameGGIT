//joaca Noastra
<div class="imgs"> 
var cards = [
    {
        name: "1",
        img: "../images/1.jpg",
        id: 1,
    },
    {
        name: "2",
        img: "../images/2.jpg",
        id: 2
    },
    {
        name: "3",
        img: "../images/3.jpg",
        id: 3
    },
    {
        name: "4",
        img : "../images/4.jpg",
        id: 4
    }, 
    {
        name: "5",
        img: "../images/5.jpg",
        id: 5
    },
    {
        name: "6",
        img: "../images/6.jpg",
        id: 6
    },
    {
        name: "7",
        img: "../images/7.jpg",
        id: 7
    },
    {
        name: "8",
        img: "../images.jpg",
        id: 8
    },
    {
        name: "9",
        img: "../images/9.jpg",
        id: 9
    },
    {
        name: "10",
        img: "../images/10.jpg",
        id: 10
    },
    {
        name: "11",
        img: "../images/11.jpg",
        id: 11
    },
    {
        name: "12",
        img: "../images/12.jpg",
        id: 12
    },
]; </div>

function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
levelGames = 2;
cardsForGames = [];
var whileLoop = true;
switch (levelGames){
    case "1":
            var newNumber = 0;
            console.log('test')
            while(whileLoop) {
                newNumber = generateRandom(0, cards.length);
                if (!cardsForGames.includes(newNumber))
                    cardsForGames.push(newNumber)
                if (cardsForGames.length >= 2)
                    whileLoop = false;
            }
        break;
    case 2:
        var newNumber = 0;
        console.log('test')
        while(whileLoop) {
            newNumber = generateRandom(0, cards.length);
            if (!cardsForGames.includes(newNumber))
                cardsForGames.push(newNumber)
            if (cardsForGames.length >= 8)
                whileLoop = false;
        }
        break;
    case "3":
            var newNumber = 0;
            console.log('test')
            while(whileLoop) {
                newNumber = generateRandom(0, cards.length);
                if (!cardsForGames.includes(newNumber))
                    cardsForGames.push(newNumber)
                if (cardsForGames.length >= 18)
                    whileLoop = false;
            }
        
        break;    
}

function arrangeCards() {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 var odeD= []
// Create one dimensional array 
var oneD = new Array(levelGames*2); 
  
// Loop to create 2D array using 1D array 
document.write("Creating 2D array <br>"); 
for (var i = 0; i < oneD.length; i++) { 
    oneD[i] = []; 
} 
var h = 0; 
var s = "GeeksforGeeks"; 
  
// Loop to initilize 2D array elements. 
for (var i = 0; i < levelGames*2; i++) { 
    for (var j = 0; j < levelGames*2; j++) { 
  
        oneD[i][j] = s[h++]; 
    } 
} 

var j = 0;
k = 0;
whileLoop2 = true;
whileLoop3 = true;
for (var i = 0; i < cardsForGames.length; i++) {
    console.log('test')
    while(whileLoop2) {
        j= generateRandom(0, levelGames*2);
        k= generateRandom(0, levelGames*2);

        if (oneD[j,k]='') {
            oneD[j,k].push(cardsForGames[i])
            whileLoop2 = false;}
    }
    while(whileLoop3) {
        j= generateRandom(0, levelGames*2);
        k= generateRandom(0, levelGames*2);

        if (oneD[j,k]='') {
            oneD[j,k].push(cardsForGames[i])
            whileLoop3 = false;}
    }
}
// Loop to display the elements of 2D array. 
for (var i = 0; i < levelGames*2; i++) { 
    for (var j = 0; j < levelGames*2; j++) 
  
    { 
        document.write(oneD[i][j] + " "); 

    } 
    document.write("<br>"); 
} 

for (var i = 0; i < levelGames*2; i++) { 
    for (var j = 0; j < levelGames*2; j++) 
  
    { addClass()




console.log(cardsForGames)
// $.each( cards, function( key, value ) {
//     console.log( value.name + ' : '+ value.img );
// });
