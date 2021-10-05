alert('Welcome to Quiz Ninja!');

const question = "What is your name?"
const answer = prompt(question);
alert(`Hello, ${answer}`);

const age = 23;
if (age < 12) {
console.log('Sorry, you are not old enough to play this game');
} else {
console.log('good')
}

const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];
let score = 0 // initialize score
for(const [question,answer] of quiz){
    const response = prompt(question);
    if(response === answer){
        alert('Correct!');
        score++;
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
}
// At the end of the game, report the player's score
alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);