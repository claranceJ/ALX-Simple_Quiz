function checkAnswer(){
    // declare correct answer
    const correctAnswer = "4";

    // Retrive the users name
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    let userAnswer;
    if (selectedOption){
        userAnswer = selectedOption.value;
    }else{
        userAnswer = null;
    }



    // getting feedback element
    const feedback = document.getElementById("feedback");
    if(userAnswer === correctAnswer){
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    }else{
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

//Add event listener to the button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);