"use strict";


var wonScore , lostScore , drawScore,
    wonScore = lostScore = drawScore  = 0,
    won = document.getElementById('won'),
    lost = document.getElementById('lost'),
    draw = document.getElementById('draw'),
    computer = document.getElementById('computer'),
    player = document.getElementById('player')

won.innerHTML = wonScore;
lost.innerHTML = lostScore;
draw.innerHTML = drawScore

function game(playerSelect) {
    //object selection
    let values = ['paper','scissors','rock'],
        randomNumber = Math.floor(Math.random()*values.length),
        computerSelect = values[randomNumber]

    computer.innerHTML = computerSelect;
    player.innerHTML = playerSelect;

    // won || lost || draw | score ++

    if( computerSelect == 'scissors' && playerSelect == 'rock' || 
        computerSelect == 'rock' && playerSelect == 'paper' ||
        computerSelect == 'paper' && playerSelect == 'scissors')
        {
            wonScore++;         
            won.innerHTML = wonScore;
            won.setAttribute("class", "plus_one");
            setTimeout(() => {  
                won.removeAttribute("class", "plus_one");
            }, 800);
        }

    else if(computerSelect == 'paper' && playerSelect == 'rock' ||
            computerSelect == 'scissors' && playerSelect == 'paper' ||
            computerSelect == 'rock' && playerSelect == 'scissors')
        {
            lostScore++;
            lost.innerHTML = lostScore;
            lost.setAttribute("class", "plus_one");
            setTimeout(() => {  
                lost.removeAttribute("class", "plus_one");
            }, 800);

        }
    else if(computerSelect == 'rock' && playerSelect == 'rock' ||
            computerSelect == 'paper' && playerSelect == 'paper' ||
            computerSelect == 'scissors' && playerSelect == 'scissors')
        {
            drawScore++;
            draw.innerHTML = drawScore;
            draw.setAttribute("class", "plus_one");
            setTimeout(() => {  
                draw.removeAttribute("class", "plus_one");
            }, 800);
        }


    
// ANIMATIONS

    player.classList.add("animated","bounce","color");
    computer.classList.add("animated","bounce","color");

    setTimeout(() => {  
        player.classList.remove("animated","bounce","color");
        computer.classList.remove("animated","bounce","color");
    }, 1000);


};

// reset score
    document.getElementById('reset').onclick = function()
    {
        wonScore = lostScore = drawScore =0;
        won.innerHTML = wonScore;
        lost.innerHTML = lostScore;
        draw.innerHTML = drawScore ;  
    };












