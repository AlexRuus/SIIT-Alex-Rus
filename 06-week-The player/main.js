let player = document.querySelector('.player');
let moveBy = 10;


window.addEventListener('load', () => {
    player.style.position = 'absolute';
    player.style.left = 0;
    player.style.top = 0;
});
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            player.style.left = parseInt(player.style.left) - moveBy + 'px';
            console.log(player.style.left + ' left');
            if(player.style.left == -10 + 'px'){
                player.style.left = parseInt(player.style.left) + moveBy + 'px';
                // alert('you lost')
                // player.style.left = 0 + 'px'
                // player.style.top = 0 + 'px'
            }
            break;
        case 'ArrowRight':
            player.style.left = parseInt(player.style.left) + moveBy + 'px';
            console.log(player.style.left + ' right');
            if(player.style.left == 400 + 'px'){
                player.style.left = parseInt(player.style.left) - moveBy + 'px';
                // alert('you lost')
                // player.style.left = 0 + 'px'
                // player.style.top = 0 + 'px'
            }
            break;
        case 'ArrowUp':
            player.style.top = parseInt(player.style.top) - moveBy + 'px';
            console.log(player.style.top + ' up');
            if(player.style.top == -10 + 'px'){
                player.style.top = parseInt(player.style.top) + moveBy + 'px';
                // alert('you lost')
                // player.style.top = 0 + 'px'
                // player.style.left = 0 + 'px'
            }
            break;
        case 'ArrowDown':
            player.style.top = parseInt(player.style.top) + moveBy + 'px';
            console.log(player.style.top + ' down');
            if(player.style.top == 400 + 'px'){
                player.style.top = parseInt(player.style.top) - moveBy + 'px';
                // alert('you lost')
                // player.style.top = 0 + 'px'
                // player.style.left = 0 + 'px'
            }
            break;
    }

});

