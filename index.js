var imagess =[
    "images/dice1.png",  "images/dice2.png",  "images/dice3.png",  "images/dice4.png",  "images/dice5.png",  "images/dice6.png",
]
function rollDice() {
    var x =Math.random();
    var y =Math.random();
    var player1 =Math.floor(x*5)
    var player2 =Math.floor(y*5)
    if(player1>player2){
        document.querySelector("h1").innerHTML = "player1 is winner"
} 
    else if(player1===player2){  document.querySelector("h1").innerHTML = "draw"}
    else{
        document.querySelector("h1").innerHTML = "player2 is winner"
    }
    document.querySelector(".img1").src = imagess[player1]
    document.querySelector(".img2").src = imagess[player2]
}