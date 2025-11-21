const guessInput = document.querySelector("#guessInput")
const displayMessage = document.querySelector("#displayMsg")


console.log(RandomNumbers)

function checkGuess() {
    const UserInput= guessInput.value;
    
    const RandomNumbers = Math.round(Math.random()*3)
    
    if(UserInput <= 3){
      if (RandomNumbers == UserInput) {
        displayMessage.innerHTML = `You Chose  ${UserInput} and bot Chose ${RandomNumbers} <br>🎉 You Won $2,000,000 !!`
    } 

    else if(RandomNumbers != UserInput){
                displayMessage.innerHTML = `You Chose  ${UserInput} and bot Chose ${RandomNumbers} <br> 😔 Opps! You lose, Try again.`
    }
}

else{
    displayMessage.innerHTML = `Please Input A Valid Number from 1-100`;
}

guessInput.value= ""

}

function resetGame() {
    RandomNumbers = Math.round(Math.random() * 100)
    document.querySelector("#message").textContent =""
    document.querySelector("#message").style.color =""
    
    document.querySelector("#guessInput").focus();
    document.querySelector("#guessInput").value = ""

    displayMessage = "reset"
}