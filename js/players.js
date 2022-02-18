const players = document.getElementsByClassName ('player');
for (const player of players) {
    console.log(player);
    player.style.border = '2px solid red';
    player.style.backgroundColor = 'black';
    player.style.color = 'white';
    player.style.margin = '20px';
    player.style.padding = '20px';
    player.style.paddingTop = '0';
    player.style.textAlign = 'center';
}