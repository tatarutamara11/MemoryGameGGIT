//joaca Noastra
var cards = [
    {
        name: "1",
        img: "images/1.jpg",
        id: 1,
    },
    {
        name: "2",
        img: "images/2.jpg",
        id: 2
    },
    {
        name: "3",
        img: "images/3.jpg",
        id: 3
    },
    {
        name: "4",
        img: "images/4.png",
        id: 4
    },
    {
        name: "5",
        img: "images/5.png",
        id: 5
    },
    {
        name: "6",
        img: "images/6.jpg",
        id: 6
    },
    {
        name: "7",
        img: "images/7.png",
        id: 7
    },
    {
        name: "8",
        img: "images/8.jpg",
        id: 8
    },
    {
        name: "9",
        img: "images/9.jpg",
        id: 9
    },
    {
        name: "10",
        img: "images/10.jpg",
        id: 10
    },
    {
        name: "11",
        img: "images/11.jpg",
        id: 11
    },
    {
        name: "12",
        img: "images/12.png",
        id: 12
    },
    {
        name: "13",
        img: "images/12.jpg",
        id: 13
    },
    {
        name: "14",
        img: "images/12.jpg",
        id: 14
    },
    {
        name: "15",
        img: "images/12.jpg",
        id: 15
    },
    {
        name: "16",
        img: "images/12.jpeg",
        id: 16
    },
    {
        name: "17",
        img: "images/12.png",
        id: 17
    },
    {
        name: "18",
        img: "images/12.jpg",
        id: 18
    },
];

function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
levelGames = 2;
cardsForGames = [];
var whileLoop = true;
switch (levelGames) {
    case "1":
        var newNumber = 0;
        // console.log('test')
        while (whileLoop) {
            newNumber = generateRandom(0, cards.length - 1);
            if (!cardsForGames.includes(newNumber))
                cardsForGames.push(newNumber)
            if (cardsForGames.length >= 2)
                whileLoop = false;
        }
        break;
    case 2:
        var newNumber = 0;
        // console.log('test')
        while (whileLoop) {
            newNumber = generateRandom(0, cards.length - 1);
            if (!cardsForGames.includes(newNumber))
                cardsForGames.push(newNumber)
            if (cardsForGames.length >= 8)
                whileLoop = false;
        }
        break;
    case "3":
        var newNumber = 0;
        // console.log('test')
        while (whileLoop) {
            newNumber = generateRandom(0, cards.length - 1);
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
var oneD = [[], []]
// Create one dimensional array 
// var oneD = new Array(levelGames*2); 

// Loop to create 2D array using 1D array 
document.write("Creating 2D array <br>");
for (var i = 0; i < (levelGames * 2); i++) {
    if (!oneD[i])
        oneD[i] = [];
    for (var j = 0; j < (levelGames * 2); j++)
        oneD[i][j] = -1;
}
var h = 0;
var s = "GeeksforGeeks";

// // Loop to initilize 2D array elements. 
// for (var i = 0; i < levelGames*2; i++) { 
//     for (var j = 0; j < levelGames*2; j++) { 

//         oneD[i][j] = s[h++]; 
//     } 
// } 

var j = 0;
k = 0;
whileLoop2 = true;
whileLoop3 = true;
// console.log(oneD)
for (var i = 0; i < cardsForGames.length; i++) {
    whileLoop2 = true;
    whileLoop3 = true;

    while (whileLoop2) {
        j = generateRandom(0, levelGames * 2 - 1);
        k = generateRandom(0, levelGames * 2 - 1);
        if (oneD[j][k] == -1) {
            oneD[j][k] = cardsForGames[i];
            whileLoop2 = false;
        }
    }
    while (whileLoop3) {
        j = generateRandom(0, levelGames * 2 - 1);
        k = generateRandom(0, levelGames * 2 - 1);
        if (oneD[j][k] == -1) {
            oneD[j][k] = cardsForGames[i];
            whileLoop3 = false;
        }
    }
}
// Loop to display the elements of 2D array. 
// console.log('Dupa prelucrare', "\n",oneD)

for (var i = 0; i < levelGames * 2; i++) {
    for (var j = 0; j < levelGames * 2; j++) {
        document.write(oneD[i][j] + " ");

    }
    document.write("<br>");
}
//  console.log(cards)
$("table").append(function () {
    var rows = [];
    for (var i = 0; i < levelGames * 2; i++) {
        rows.push($("<tr>").append(function () {
            var cols = [];
            for (var j = 0; j < levelGames * 2; j++) {
                var cardInfo;
                var position = oneD[i][j];
                // console.log(position, ' - ', cards[position])
                cardInfo = $("<img>", {
                    src: cards[oneD[i][j]].img,
                    width: 50,
                    height: 50,
                    cards_id:cards[oneD[i][j]].id
                }).hide();
                cardInfoBack = $("<img>", {
                    src: "images/50px.gif",
                    width: 50,
                    height: 50,
                    cards_id_back:cards[oneD[i][j]].id
                });
                var td;
                td = $("<td>");
                td.attr('idCards', cards[oneD[i][j]].id);
                td.attr('statute', "closed");
                td.attr("matched", false);
                td.on("click", cardClicked);


                cols.push(td.append(cardInfo).append(cardInfoBack));
            }
            return cols;
        }));
    }
    return rows;
});

count = 1;
var openedCards;
function cardClicked() {
    // console.log(count, '    ', $(this).attr('statute'))
    if ( ($(this).attr('statute') == 'closed') && (count == 1) ) {
        $(this).addClass("clicked");
        $(this).attr('statute', 'opened')
        var idCards = $(this).attr('idcards');
        var parent = $(this).children();
        count++;
        for (var i = 0; i < parent.length;i++) {
            if(typeof parent[i].attributes['cards_id'] != 'undefined' && parent[i].attributes['cards_id'].nodeValue == idCards) {
                $(parent[i]).show()
            }
            if(typeof parent[i].attributes['cards_id_back'] != 'undefined' && parent[i].attributes['cards_id_back'].nodeValue == idCards) {
                $(parent[i]).hide()
            }
        }
    }

    if ( ($(this).attr('statute') == 'closed') && (count == 2) ) {    
        count=1
        var idCards = $(this).attr('idcards');
        var parent = $(this).children();
        for (var i = 0; i < parent.length;i++) {
            if(typeof parent[i].attributes['cards_id'] != 'undefined' && parent[i].attributes['cards_id'].nodeValue == idCards) {
                $(parent[i]).show().delay(1000).fadeOut();
            }
            if(typeof parent[i].attributes['cards_id_back'] != 'undefined' && parent[i].attributes['cards_id_back'].nodeValue == idCards) {
                $(parent[i]).hide().delay(1000).fadeIn();
            }

    }

    if ( ($(this).attr('statute') == 'closed') && (count == 2) ) {    
        count=1
    }








        // $("ul").find("[data-slide='" + current + "']"); 
        // $("img").each(function(index, e) {
        //     // console.log(index, '        -',$(e).attr("cards_id"));
        //     if( $(e).attr("cards_id") == idCards) {
        //         $(e).show();
        //     }
        //     if( $(e).attr("cards_id_back") == idCards) {
        //         $(e).hide();
        //     }
        //     //console.log(imgsrc);
        //   });
    }
    // if (($(this).attr('statute') == 'closed') && (count == 2)) {
    //              {if (($(this).attr('idCards')== .attr('idCards') ) && (.attr('staute')=='opened')) {
    //                 $(this).attr('matched', true);
    //                 $().attr('matched', true);
    //                 $().addClass("clicked");
    //              } else {
    //                 $(this).addTemporaryClass('clicked', 1000);
    //          }
    //     }
    // } 
}
    


console.log("After - ", $(this).attr('statute'))
    






// console.log(cardsForGames)
// $.each( cards, function( key, value ) {
//     console.log( value.name + ' : '+ value.img );
// });




