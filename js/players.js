function setPlayerStyle (player) {
    player.style.border = '2px solid red';
    // player.style.backgroundColor = 'black';
    // player.style.color = 'white';
    player.style.margin = '20px';
    player.style.padding = '20px';
    player.style.paddingTop = '0';
    player.style.textAlign = 'center';
}

const players = document.getElementsByClassName ('player');
for (const player of players) {
    setPlayerStyle(player);


    // player.addEventListener('click', function(){
    //     player.style.backgroundColor = 'green';
    // })
    // player.style.border = '2px solid red';
    // // player.style.backgroundColor = 'black';
    // player.style.color = 'white';
    // player.style.margin = '20px';
    // player.style.padding = '20px';
    // player.style.paddingTop = '0';
    // player.style.textAlign = 'center';
}

function addPlayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = ` 
    <h4 class="player-name"> new player - 4</h4>
    <p>Saepe ab minus deserunt nisi repellat commodi voluptatibus natus odio, explicabo, sapiente voluptates a repellendus ut nobis dolores nemo exercitationem aliquam at quasi libero dolorum iure, totam quaerat! Neque, illo.</p>
    `;
    setPlayerStyle(player);
    playersContainer.appendChild(player);


}
document.getElementById('players').addEventListener('click', function (event) {
    if(event.target.tagName.toLowerCase() == 'div'){
        event.target.style.backgroundColor = 'green';
    }
    else{
        event.target.parentNode.style.backgroundColor = 'green';
    }
});