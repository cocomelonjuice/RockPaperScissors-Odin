
const game = ()=> {
    let playerscore = 0;
    let computerscore = 0;
    let moves = 0;

const playGame = () =>{
        const rockBtn = document.querySelector ('.rock');
        const paperBtn = document.querySelector ('.paper');
        const scissorsBtn = document.querySelector ('.scissors');
        const playeroptions = [rockBtn,paperBtn,scissorsBtn];
        const computeroptions = ['rock','papers','scissors'];

        playeroptions.forEach (option => {
            option.addEventListener ('click', function (){
                const movesleft = document.querySelector ('.movesleft');
                moves++;
                movesleft.innerText = `Move left: ${10 - moves}`;

                const choicenumber = Math.floor(Math.random()*3);
                const computerchoice = computeroptions[choicenumber];

                winner(this.innerText, computerchoice);

                if (moves == 10){
                    gameOver(playeroptions, movesleft);
                }
            })
        })

    }    

    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase ();

        if (player === computer){
            result.textContent = 'Draw';
        }

        else if (player == 'rock'){
            if (computer == 'scissors'){
                result.textContent = 'You won';
                playerscore++;
                playerScoreBoard.textContent = playerscore;
            }
            else{
                result.textContent = 'You lost';
                computerscore++
                computerScoreBoard.textContent = computerscore;
            }
        }

        else if (player == 'paper'){
            if (computer == 'rock'){
                result.textContent = 'You won';
                playerscore++;
                playerScoreBoard.textContent = playerscore;
            }
            else{
                result.textContent = 'You lost';
                computerscore++
                computerScoreBoard.textContent = computerscore;
            }
        }

        else if (player == 'scissors'){
            if (computer == 'paper'){
                result.textContent = 'You won';
                playerscore++;
                playerScoreBoard.textContent = playerscore;
            }
            else{
                result.textContent = 'You lost';
                computerscore++
                computerScoreBoard.textContent = computerscore;
            }
        }
    }

    const gameOver = (playeroptions, movesleft) => {

        const choosemove = document.querySelector ('.move');
        const result = document.querySelector ('.result');
        const reloadBtn = documetn.querySelector ('.reload');

        playeroptions.forEach (option => {
            option.style.display = 'none';
        })

        choosemove.innerText = 'Game over!';
        movesleft.style.display = 'none';

        if (playerscore >  computerscore){
            result.style.fontSize = '2rem';
            result.innerText = 'You won the game';
            result.style.color='green';
        }
        else if (playerscore <  computerscore){
            result.style.fontSize = '2rem';
            result.innerText = 'You lost the game';
            result.style.color='red';
        }
        else {
            result.style.fontSize = '2rem';s
            result.innerText = 'Draw';
            result.style.color='gray';
        }

        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display='flex';
        reloadBtn.addEventListener('click', ()=>{
            window.location.reload();
        })
    }

    playGame ();
}

game();
  

 


// how to update repo github from terminal
/*Quick summary:
https://medium.com/@avivamazurek/how-to-update-a-github-repository-from-your-local-drive-e765eb48a691
Open terminal and enter the folder of the github repository/project you want to update
Type into terminal: “git add .” and then hit enter
Type into terminal “git status” and then hit enter (this step is optional)
Type into terminal “git commit -m ‘type any message here” and then hit enter
Type into terminal “git push” and then hit enter */