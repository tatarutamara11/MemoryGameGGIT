
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
        img: "images/13.jpg",
        id: 13
    },
    {
        name: "14",
        img: "images/14.jpg",
        id: 14
    },
    {
        name: "15",
        img: "images/15.jpg",
        id: 15
    },
    {
        name: "16",
        img: "images/16.jpeg",
        id: 16
    },
    {
        name: "17",
        img: "images/17.png",
        id: 17
    },
    {
        name: "18",
        img: "images/18.jpg",
        id: 18
    },
];

t0='';
t1='';
var count = 0;

function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
levelGames = parseInt(localStorage.getItem("level"));
cardsForGames = [];
var whileLoop = true;
switch (levelGames) {
    case 1:
        var newNumber = 0;
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
        while (whileLoop) {
            newNumber = generateRandom(0, cards.length - 1);
            if (!cardsForGames.includes(newNumber))
                cardsForGames.push(newNumber)
            if (cardsForGames.length >= 8)
                whileLoop = false;
        }
        break;
    case 3:
        var newNumber = 0;
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
for (var i = 0; i < (levelGames * 2); i++) {
    if (!oneD[i])
        oneD[i] = [];
    for (var j = 0; j < (levelGames * 2); j++)
        oneD[i][j] = -1;
}
var h = 0;
var s = "GeeksforGeeks"; 
var j = 0;
k = 0;
whileLoop2 = true;
whileLoop3 = true;
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
$("table").append(function () {
    var rows = [];
    var arina = 0;
    for (var i = 0; i < levelGames * 2; i++) {
        rows.push($("<tr>").append(function () {
            var cols = [];
            for (var j = 0; j < levelGames * 2; j++) {
                var cardInfo;
                var position = oneD[i][j];
                cardInfo = $("<img>", {
                    src: cards[oneD[i][j]].img,
                    width: 80,
                    height: 80,
                    cards_id:cards[oneD[i][j]].id
                }).hide();
                cardInfoBack = $("<img>", {
                    src: "images/molddata1.png",
                    width: 80,
                    height: 80,
                    cards_id_back:cards[oneD[i][j]].id
                });
                var td;
                td = $("<td>");
                td.attr('idCards', cards[oneD[i][j]].id);
                td.attr('statute', "closed");
                td.attr("matched", false);
                td.attr("id", arina);
                td.on("click", cardClicked);

                cols.push(td.append(cardInfo).append(cardInfoBack));
                arina++;
            }
            return cols;
        }));
    }
    return rows;
});
var openedCards;
function cardClicked() {
        
        var idCards = $(this).attr('idcards');
        var parent = $(this).children();
        var arinaStatus = $(this).attr('id');
        for (var i = 0; i < parent.length;i++) {
            if(typeof parent[i].attributes['cards_id'] != 'undefined' && parent[i].attributes['cards_id'].nodeValue == idCards) {
                $(parent[i]).show();
               if ($(this).attr('statute')=='closed') statusCard(idCards, arinaStatus)
            }
            if(typeof parent[i].attributes['cards_id_back'] != 'undefined' && parent[i].attributes['cards_id_back'].nodeValue == idCards) {
                $(parent[i]).hide()
            }
        }
        if (count2==(levelGames*levelGames*4)) {endGame()};
    }
    count2=0;
function statusCard(card_id, cell_nb) {
   
   if (count == 0) {t0 = performance.now()};
   count++;
    if ($('#status_card').attr('card_one') == '') {
        $('#status_card').attr('card_one', card_id);
        $('#status_card').attr('cell_one', cell_nb);
        count2++;
    } else if ($('#status_card').attr('card_one') != '' && ($('#status_card').attr('card_two') == '')  && ($('#status_card').attr('cell_one') != cell_nb)){
        $('#status_card').attr('card_two', card_id);
        $('#status_card').attr('cell_two', cell_nb);
        count2++
    } else if ($('#status_card').attr('card_one') != '' && $('#status_card').attr('card_two') != ''  && ($('#status_card').attr('cell_one') != cell_nb)  && ($('#status_card').attr('cell_two') != cell_nb)) {
        count2++;
        if ($('#status_card').attr('card_one') == $('#status_card').attr('card_two')) {
            $('#status_card').attr('card_one', card_id);
            $('#status_card').attr('cell_one', cell_nb);
            $('#status_card').attr('card_two', '');
            $('#status_card').attr('cell_two', '');
            
        } else {
            showHideCards($('#status_card').attr('card_one'), $('#status_card').attr('cell_one'));
            showHideCards($('#status_card').attr('card_two'), $('#status_card').attr('cell_two'));
            $('#status_card').attr('card_one', card_id);
            $('#status_card').attr('cell_one', cell_nb);
            $('#status_card').attr('card_two', '');
            $('#status_card').attr('cell_two', '');
            count2=count2-2;
        }
        
    }
}

function showHideCards(cardId, cellID){
    var parent = $('#'+cellID).children();
    for (var i = 0; i < parent.length;i++) {
        if(typeof parent[i].attributes['cards_id'] != 'undefined' && parent[i].attributes['cards_id'].nodeValue == cardId) {
            $(parent[i]).hide();
        }
        if(typeof parent[i].attributes['cards_id_back'] != 'undefined' && parent[i].attributes['cards_id_back'].nodeValue == cardId) {
            $(parent[i]).show()
        }
    }
}
    
function endGame(){
    localStorage.setItem("movesNumber", count);
    t1 = performance.now();
    time=(t1-t0)*0.001;
    localStorage.setItem("totalTime", time);
  window.location.href = "../html/congratulations.html";
}



