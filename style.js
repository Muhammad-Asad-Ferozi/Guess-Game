
let secretNu = Math.trunc(Math.random()*20+1);


let score = 5;
document.querySelector('.score').textContent = score


let highScore = 0;

document.querySelector('.highScore').textContent = highScore;

let flag = 0;



document.querySelector('.check').addEventListener('click', function(){

    if(score === 0)
    {
        document.body.style.backgroundColor = '#ff0000';
        document.querySelector('#starGussing').textContent = 'You lost😭😿😢';
        flag =1;
    }

    if(flag === 0)
    {
    let guess = (Number(document.querySelector('#input').value));
    console.log(`Guess = ${guess}`);

    if(!guess)
    {
        document.querySelector('#startGussing').textContent = "No input 😑";
    }
    else if(guess === secretNu)
    {
        document.body.style.backgroundColor = '#27f407';
        document.querySelector('#startGussing').textContent = "🥳Mubark ho You Gussed 🎉";
        document.querySelector('#question').textContent = secretNu;
        if(score>highScore)
        {

            highScore = score;
        }
        document.querySelector('.highScore').textContent = highScore;
        flag = 1;
       
    }

    else if(guess>secretNu+3)
    {
        document.querySelector('#startGussing').textContent = "💥 Too high 📈";
        score--;
    }
    else if(guess>secretNu)
    {
        document.querySelector('#startGussing').textContent = "High a bit📈";
        score--;
    }
    else if(guess<secretNu-3)
    {
        document.querySelector('#startGussing').textContent = "💥 Too low 📉";
        score--;
    }
    else if(guess<secretNu)
    {
        document.querySelector('#startGussing').textContent = "low a bit 📉";
        score--;
    }
    document.querySelector('.score').textContent = score;
    document.querySelector('#input').value = '';
}
});
document.querySelector('.tryAgain').addEventListener('click', function(){
    document.body.style.backgroundColor = 'rgb(32, 32, 32)';
    score = 5;
    document.querySelector('.score').textContent = score;
    document.querySelector('#startGussing').textContent = "Start Gussing...";
    document.querySelector('#question').textContent = '?';
    secretNu = Math.trunc(Math.random()*20+1);

    flag=0;
});