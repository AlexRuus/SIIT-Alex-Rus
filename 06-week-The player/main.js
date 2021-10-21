const gameContainer = document.querySelector('#game-container');
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
            if(player.style.left == 400 + 'px' || compare() == true){
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
            if(player.style.top == 400 + 'px' || compare() == true){
                player.style.top = parseInt(player.style.top) - moveBy + 'px';

            }
            break;
    }

});

let obstacleList = [];

function createObstacle(){
    let test = (Math.floor(Math.random() * 37) + 1) * 10;
    let test1 = (Math.floor(Math.random() * 37) + 1) * 10;

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
    for(i = 0; i < 100; i++){
        createObstacle();
    }
}

function compare(){
    for(i = 0; i < obstacleL.length; i++){
        if(player.style.left == obstacleList[i].style.left && player.style.top == obstacleLi[i].style.top){
            return true;
        }
    }
    return false;
}