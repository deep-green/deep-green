var gesammt = "";
var fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
var gameNR = 0;

/*
KOMMUNIKATION BACKEND
getGames -> Backend
<- games{Array[Json(id(,ggf. höchste elo)]}
viewGame(gameNR)->Backend
 */

var socket = io('http://ec2-54-93-171-91.eu-central-1.compute.amazonaws.com:4999');
socket.on('connect', function () {
    socket.emit("getGames", {"token": "viewer"});
    console.log("Verbunden mit Server");

});
/*
Beispielausgabe bei socket.on("games")
[
  {
    "ID_game": 1,
    "FEN": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    "elo": 1267
  }
]
 */
socket.on('games', function (data) {
    console.log("von Server");
    document.getElementById("Spiel").innerHTML='';
    gesammt="";
    for(object of data){
        if(object.hasOwnProperty("_id")){
            document.getElementById("Spiel").innerHTML=document.getElementById("Spiel").innerHTML+'<option onclick=\"setGameNR(this.innerHTML)">'+object._id+"</option>";
        }
    }
});
/*
Beispielausgabe bei socket.on("recive")
{
  "FEN": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
  "ID_game": 2,
  "color": false,
  "turns": [
    "e2-e4",
    "c2-c4"
  ]
}
 */
socket.on("receive", function (data) {
   console.log(data);
    var historie;
       fen=data.FEN;
       console.log(fen);
       historie=data.turns;

    gesammt=gesammt+"\n"+historie;
    document.getElementById("his").innerHTML = gesammt;

    toHTML();
});

function setGameNR(nummer){
    gameNR=nummer;
    console.log(gameNR);
    socket.emit('viewGame',{ID_game: gameNR, token: "viewer"});
    gesammt="";
}


function toHTML() {
    var idZeile = 1;
    var idSpalte = 1;
    clear();
    /*
    Die Variable idZeile stellt die Zeile des Spielfeldes dar.
    Die Variable idSpalte stellt die Spalte in der Aktuellen Zeile dar.
    Die nachfolgende Variable position stellt die Stelle in der FEN-Notation dar.
     */
    for (position = 0; position < fen.length; position++) {
        var aktuell = ' ';
        if (fen.charAt(position) == ' ') {
            position = fen.length;
        }
        else {
            if (fen.charAt(position) == '/') {
                idZeile++;
                idSpalte = 0;
            }
            else if (fen.charAt(position) == 'p') {
                aktuell = '&#9823';
            }
            else if (fen.charAt(position) == 'r') {
                aktuell = '&#9820';
            }
            else if (fen.charAt(position) == 'n') {
                aktuell = '&#9822';
            }
            else if (fen.charAt(position) == 'b') {
                aktuell = '&#9821';
            }
            else if (fen.charAt(position) == 'q') {
                aktuell = '&#9819';
            }
            else if (fen.charAt(position) == 'k') {
                aktuell = '&#9818';
            }

            else if (fen.charAt(position) == 'P') {
                aktuell = '&#9817';
            }
            else if (fen.charAt(position) == 'R') {
                aktuell = '&#9814';
            }
            else if (fen.charAt(position) == 'N') {
                aktuell = '&#9816';
            }
            else if (fen.charAt(position) == 'B') {
                aktuell = '&#9815';
            }
            else if (fen.charAt(position) == 'Q') {
                aktuell = '&#9813';
            }
            else if (fen.charAt(position) == 'K') {
                aktuell = '&#9812';
            }
            else {
                if (fen.charAt(position) == '1') {
                    aktuell = ' ';
                }
                else if (fen.charAt(position) == '2') {
                    aktuell = ' ';
                    idSpalte = idSpalte + 1;
                }
                else if (fen.charAt(position) == '3') {
                    aktuell = ' ';
                    idSpalte = idSpalte + 2;
                }
                else if (fen.charAt(position) == '4') {
                    aktuell = ' ';
                    idSpalte = idSpalte + 3;
                }
                else if (fen.charAt(position) == '5') {
                    aktuell = ' ';
                    idSpalte = idSpalte + 4;
                }
                else if (fen.charAt(position) == '6') {
                    aktuell = ' ';
                    idSpalte = idSpalte + 5;
                }
                else if (fen.charAt(position) == '7') {
                    aktuell = ' ';
                    idSpalte = idSpalte + 6;
                }
                else if (fen.charAt(position) == '8') {
                    aktuell = ' ';
                    idSpalte = idSpalte + 7;
                }
            }

            if (idZeile == 1) {
                if (idSpalte == 1) {
                    document.getElementById('c11').innerHTML = aktuell;
                }
                else if (idSpalte == 2) {
                    document.getElementById('c12').innerHTML = aktuell;
                }
                else if (idSpalte == 3) {
                    document.getElementById('c13').innerHTML = aktuell;
                }
                else if (idSpalte == 4) {
                    document.getElementById('c14').innerHTML = aktuell;
                }
                else if (idSpalte == 5) {
                    document.getElementById('c15').innerHTML = aktuell;
                }
                else if (idSpalte == 6) {
                    document.getElementById('c16').innerHTML = aktuell;
                }
                else if (idSpalte == 7) {
                    document.getElementById('c17').innerHTML = aktuell;
                }
                else if (idSpalte == 8) {
                    document.getElementById('c18').innerHTML = aktuell;
                }
            }

            else if (idZeile == 2) {
                if (idSpalte == 1) {
                    document.getElementById('c21').innerHTML = aktuell;
                }
                else if (idSpalte == 2) {
                    document.getElementById('c22').innerHTML = aktuell;
                }
                else if (idSpalte == 3) {
                    document.getElementById('c23').innerHTML = aktuell;
                }
                else if (idSpalte == 4) {
                    document.getElementById('c24').innerHTML = aktuell;
                }
                else if (idSpalte == 5) {
                    document.getElementById('c25').innerHTML = aktuell;
                }
                else if (idSpalte == 6) {
                    document.getElementById('c26').innerHTML = aktuell;
                }
                else if (idSpalte == 7) {
                    document.getElementById('c27').innerHTML = aktuell;
                }
                else if (idSpalte == 8) {
                    document.getElementById('c28').innerHTML = aktuell;
                }
            }
            else if (idZeile == 3) {
                if (idSpalte == 1) {
                    document.getElementById('c31').innerHTML = aktuell;
                }
                else if (idSpalte == 2) {
                    document.getElementById('c32').innerHTML = aktuell;
                }
                else if (idSpalte == 3) {
                    document.getElementById('c33').innerHTML = aktuell;
                }
                else if (idSpalte == 4) {
                    document.getElementById('c34').innerHTML = aktuell;
                }
                else if (idSpalte == 5) {
                    document.getElementById('c35').innerHTML = aktuell;
                }
                else if (idSpalte == 6) {
                    document.getElementById('c36').innerHTML = aktuell;
                }
                else if (idSpalte == 7) {
                    document.getElementById('c37').innerHTML = aktuell;
                }
                else if (idSpalte == 8) {
                    document.getElementById('c38').innerHTML = aktuell;
                }
            }

            else if (idZeile == 4) {
                if (idSpalte == 1) {
                    document.getElementById('c41').innerHTML = aktuell;
                }
                else if (idSpalte == 2) {
                    document.getElementById('c42').innerHTML = aktuell;
                }
                else if (idSpalte == 3) {
                    document.getElementById('c43').innerHTML = aktuell;
                }
                else if (idSpalte == 4) {
                    document.getElementById('c44').innerHTML = aktuell;
                }
                else if (idSpalte == 5) {
                    document.getElementById('c45').innerHTML = aktuell;
                }
                else if (idSpalte == 6) {
                    document.getElementById('c46').innerHTML = aktuell;
                }
                else if (idSpalte == 7) {
                    document.getElementById('c47').innerHTML = aktuell;
                }
                else if (idSpalte == 8) {
                    document.getElementById('c48').innerHTML = aktuell;
                }
            }

            else if (idZeile == 5) {
                if (idSpalte == 1) {
                    document.getElementById('c51').innerHTML = aktuell;
                }
                else if (idSpalte == 2) {
                    document.getElementById('c52').innerHTML = aktuell;
                }
                else if (idSpalte == 3) {
                    document.getElementById('c53').innerHTML = aktuell;
                }
                else if (idSpalte == 4) {
                    document.getElementById('c54').innerHTML = aktuell;
                }
                else if (idSpalte == 5) {
                    document.getElementById('c55').innerHTML = aktuell;
                }
                else if (idSpalte == 6) {
                    document.getElementById('c56').innerHTML = aktuell;
                }
                else if (idSpalte == 7) {
                    document.getElementById('c57').innerHTML = aktuell;
                }
                else if (idSpalte == 8) {
                    document.getElementById('c58').innerHTML = aktuell;
                }
            }

            else if (idZeile == 6) {
                if (idSpalte == 1) {
                    document.getElementById('c61').innerHTML = aktuell;
                }
                else if (idSpalte == 2) {
                    document.getElementById('c62').innerHTML = aktuell;
                }
                else if (idSpalte == 3) {
                    document.getElementById('c63').innerHTML = aktuell;
                }
                else if (idSpalte == 4) {
                    document.getElementById('c64').innerHTML = aktuell;
                }
                else if (idSpalte == 5) {
                    document.getElementById('c65').innerHTML = aktuell;
                }
                else if (idSpalte == 6) {
                    document.getElementById('c66').innerHTML = aktuell;
                }
                else if (idSpalte == 7) {
                    document.getElementById('c67').innerHTML = aktuell;
                }
                else if (idSpalte == 8) {
                    document.getElementById('c68').innerHTML = aktuell;
                }
            }
            else if (idZeile == 7) {
                if (idSpalte == 1) {
                    document.getElementById('c71').innerHTML = aktuell;
                }
                else if (idSpalte == 2) {
                    document.getElementById('c72').innerHTML = aktuell;
                }
                else if (idSpalte == 3) {
                    document.getElementById('c73').innerHTML = aktuell;
                }
                else if (idSpalte == 4) {
                    document.getElementById('c74').innerHTML = aktuell;
                }
                else if (idSpalte == 5) {
                    document.getElementById('c75').innerHTML = aktuell;
                }
                else if (idSpalte == 6) {
                    document.getElementById('c76').innerHTML = aktuell;
                }
                else if (idSpalte == 7) {
                    document.getElementById('c77').innerHTML = aktuell;
                }
                else if (idSpalte == 8) {
                    document.getElementById('c78').innerHTML = aktuell;
                }
            }

            else if (idZeile == 8) {
                if (idSpalte == 1) {
                    document.getElementById('c81').innerHTML = aktuell;
                }
                else if (idSpalte == 2) {
                    document.getElementById('c82').innerHTML = aktuell;
                }
                else if (idSpalte == 3) {
                    document.getElementById('c83').innerHTML = aktuell;
                }
                else if (idSpalte == 4) {
                    document.getElementById('c84').innerHTML = aktuell;
                }
                else if (idSpalte == 5) {
                    document.getElementById('c85').innerHTML = aktuell;
                }
                else if (idSpalte == 6) {
                    document.getElementById('c86').innerHTML = aktuell;
                }
                else if (idSpalte == 7) {
                    document.getElementById('c87').innerHTML = aktuell;
                }
                else if (idSpalte == 8) {
                    document.getElementById('c88').innerHTML = aktuell;
                }
            }

        }
        idSpalte++;
    }
}

function clear() {
    document.getElementById('c11').innerHTML = '';
    document.getElementById('c12').innerHTML = '';
    document.getElementById('c13').innerHTML = '';
    document.getElementById('c14').innerHTML = '';
    document.getElementById('c15').innerHTML = '';
    document.getElementById('c16').innerHTML = '';
    document.getElementById('c17').innerHTML = '';
    document.getElementById('c18').innerHTML = '';
    document.getElementById('c21').innerHTML = '';
    document.getElementById('c22').innerHTML = '';
    document.getElementById('c23').innerHTML = '';
    document.getElementById('c24').innerHTML = '';
    document.getElementById('c25').innerHTML = '';
    document.getElementById('c26').innerHTML = '';
    document.getElementById('c27').innerHTML = '';
    document.getElementById('c28').innerHTML = '';
    document.getElementById('c31').innerHTML = '';
    document.getElementById('c32').innerHTML = '';
    document.getElementById('c33').innerHTML = '';
    document.getElementById('c34').innerHTML = '';
    document.getElementById('c35').innerHTML = '';
    document.getElementById('c36').innerHTML = '';
    document.getElementById('c37').innerHTML = '';
    document.getElementById('c38').innerHTML = '';
    document.getElementById('c41').innerHTML = '';
    document.getElementById('c42').innerHTML = '';
    document.getElementById('c43').innerHTML = '';
    document.getElementById('c44').innerHTML = '';
    document.getElementById('c45').innerHTML = '';
    document.getElementById('c46').innerHTML = '';
    document.getElementById('c47').innerHTML = '';
    document.getElementById('c48').innerHTML = '';
    document.getElementById('c51').innerHTML = '';
    document.getElementById('c52').innerHTML = '';
    document.getElementById('c53').innerHTML = '';
    document.getElementById('c54').innerHTML = '';
    document.getElementById('c55').innerHTML = '';
    document.getElementById('c56').innerHTML = '';
    document.getElementById('c57').innerHTML = '';
    document.getElementById('c58').innerHTML = '';
    document.getElementById('c61').innerHTML = '';
    document.getElementById('c62').innerHTML = '';
    document.getElementById('c63').innerHTML = '';
    document.getElementById('c64').innerHTML = '';
    document.getElementById('c65').innerHTML = '';
    document.getElementById('c66').innerHTML = '';
    document.getElementById('c67').innerHTML = '';
    document.getElementById('c68').innerHTML = '';
    document.getElementById('c71').innerHTML = '';
    document.getElementById('c72').innerHTML = '';
    document.getElementById('c73').innerHTML = '';
    document.getElementById('c74').innerHTML = '';
    document.getElementById('c75').innerHTML = '';
    document.getElementById('c76').innerHTML = '';
    document.getElementById('c77').innerHTML = '';
    document.getElementById('c78').innerHTML = '';
    document.getElementById('c81').innerHTML = '';
    document.getElementById('c82').innerHTML = '';
    document.getElementById('c83').innerHTML = '';
    document.getElementById('c84').innerHTML = '';
    document.getElementById('c85').innerHTML = '';
    document.getElementById('c86').innerHTML = '';
    document.getElementById('c87').innerHTML = '';
    document.getElementById('c88').innerHTML = '';
}

window.onload = function () {
    toHTML();

}

/*
    Unicode Decimal Code für die Spielfigur Symbole:
    &#9817 Bauer weiß
    &#9814 Turm weiß
    &#9816 Springer weiß
    &#9815 Läufer weiß
    &#9813 Dame weiß
    &#9812 König weiß

    &#9823 Bauer schwarz
    &#9820 Turm schwarz
    &#9822 Springer schwarz
    &#9821 Läufer schwarz
    &#9819 Dame schwarz
    &#9818 König schwarz
 */