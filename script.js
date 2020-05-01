let question = function(q, a1, a2, a3, a) {
    this.q = q;
    this.a1 = a1;
    this.a2 = a2;
    this.a3 = a3;
    this.a = a;
}

question.prototype.display = function() {
    console.log('here');
    console.log(this.q);
    console.log('1. ' + this.a1);
    console.log('2. ' + this.a2);
    console.log('3. ' + this.a3);
}

let q1 = new question('Best animal?', 'Rabbit', 'Hippo', 'Elephant', 1);
let q2 = new question('1 + 1?', '1', '2', '3', 2);
let q3 = new question('Best activity?', 'sleeping', 'working', 'eating', 3);

function startQuiz() {
    console.log('----------------------------------------------------');
    console.log('                      Quiz                          ');
    console.log('----------------------------------------------------');

    // asks random question
    printQ();
    // ask for answer

}

function printQ() {
    rand = Math.ceil(Math.random() * 3 )
    console.log(rand);
    q1.display;
}

startQuiz();

userInput = prompt('Use the number to answer the question:')

if (userInput === '1') {
    console.log('Correct');
} else {
    console.log('Wrong');
}

/*
function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');

        } else {
            console.log('Wrong answer. Try again :)')
        }
    }
]


*/















// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge  = function() {
//     console.log(2016 - this.yearOfBirth);
// };
