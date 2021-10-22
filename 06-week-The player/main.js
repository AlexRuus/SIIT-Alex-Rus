const gameContainer = document.querySelector('#game-container');
const finish = document.querySelector('.finish');
const main = document.querySelector('.main');
let player = document.querySelector('.player');

let moveBy = 10;


window.addEventListener('load', () => {
    player.style.position = 'absolute';
    player.style.left = 0;
    player.style.top = 0;
    mapGenerator();
    console.log(obstacleList);
});
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            player.style.left = parseInt(player.style.left) - moveBy + 'px';
            console.log(player.style.left + ' left');
            if(player.style.left == -10 + 'px' || compare() == true){
                player.style.left = parseInt(player.style.left) + moveBy + 'px';
            }
            break;
        case 'ArrowRight':
            player.style.left = parseInt(player.style.left) + moveBy + 'px';
            console.log(player.style.left + ' right');
            if(player.style.left == 600 + 'px' || compare() == true){
                player.style.left = parseInt(player.style.left) - moveBy + 'px';

            }
            break;
        case 'ArrowUp':
            player.style.top = parseInt(player.style.top) - moveBy + 'px';
            console.log(player.style.top + ' up');
            if(player.style.top == -10 + 'px' || compare() == true){
                player.style.top = parseInt(player.style.top) + moveBy + 'px';               

            }
            break;
        case 'ArrowDown':
            player.style.top = parseInt(player.style.top) + moveBy + 'px';
            console.log(player.style.top + ' down');
            if(player.style.top == 600 + 'px' || compare() == true){
                player.style.top = parseInt(player.style.top) - moveBy + 'px';

            }
            break;
    }
    playerWin();
});

let obstacleList = [];

function createObstacle(){
    let test = (Math.floor(Math.random() * 56) + 1) * 10;
    let test1 = (Math.floor(Math.random() * 56) + 1) * 10;

    let obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    obstacle.style.position = 'absolute';
    obstacle.style.top = test + 'px';
    obstacle.style.left = test1 + 'px';
    gameContainer.append(obstacle);

    obstacleList.push(obstacle);
    
}
console.log(obstacleList);


function mapGenerator(){
    for(i = 0; i < 300; i++){
        createObstacle();
    }
}

function compare(){
    for(i = 0; i < obstacleList.length; i++){
        if(player.style.left == obstacleList[i].style.left && player.style.top == obstacleList[i].style.top){
            return true;
        }
    }
    return false;
}


function playerWin(){
    if(player.offsetLeft >= 570 && player.offsetTop >= 570){
        alert('you win'); 
    }
}








// let startingSeconds = 10;
// const timer = document.querySelector('.timer');

// let refresh = setInterval(updateCountdown,1000);
// setInterval(updateCountdown,1000);
// clearInterval(refresh);

// function updateCountdown() {
//     if(startingSeconds == 0){
//         clearInterval(refresh);
//         playerLose()
//         return
//     }
//     startingSeconds--;
//     timer.innerHTML = `Time left: ${startingSeconds}`;
// }

let playerLifes = [];

let score = document.createElement('div');
score.classList.add('player-score');

for(i = 0; i < 5; i++){
    main.prepend(score);
    console.log(main)

}


function playerPoints(){

}





function playerLose(){
    if(startingSeconds == 0){
        alert('you lost');
        window.location.reload();
    }
}


// var refresh = setInterval(fname, 10000);

// /* later */
// clearInterval(refresh);