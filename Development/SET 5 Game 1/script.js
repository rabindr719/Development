// prompt('Enter Yoyr Name :');
let Score= 20;

const SecretNumber=Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent=SecretNumber   ;
//This have two argument onclick & function
// Vlue is used for input value 

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //document.querySelector('.message').textContent='Correct Number';

    // When there is no input
    if(!guess)
    {
        document.querySelector('.message').textContent=
        'No Number ';
        //When player wins
    } else if(guess===SecretNumber)
    {
        document.querySelector('.mesaage').textContent='Correct Number !';
        document.querySelector('body').style.backgroundColor='Green';
        document.querySelector('.number').style.width='30rem'
            //When guess is too high
    }else if(guess>SecretNumber)
    {
        if(Score>0)
        {
            document.querySelector('.message').textContent='Too High';
            Score--;
            document.querySelector('.Score').textContent=Score;
        }else 
            {
              document.querySelector('.meassage').textContent='You Lost the Game';
              document.querySelector('.Score').textContent=0;
            }
        //When guess is too LOW 
    }else if(guess<SecretNumber)
    {
        document.querySelector('.message').textContent='Too Low ';
        Score--;
        document.querySelector('.Score').textContent=Score;
    }


});