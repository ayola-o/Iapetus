
var questions = [{
    number: 1,
    question:"Please choose an appropriate sex:",
    choices:["Male", "Female", "Bobrisky"],
}, {
    number: 2,
    question:"What do you do for a living?",
    choices:["Developer", "Designer", "Content Provider","Banker","Teacher","Doctor",,"Lawyer","Taxify/Uber Driver","Taxify/Uber Driver", "Intern at a startup in Yaba","Staying woke on twitter", "Alariwo", "I am a Nigerian Politician"],
},{
  number: 3,
  question:"How much do you earn currently?",
  choices:["10k-50k", "50k-100k", "100k-500k", "500k-1,000,000", "Nothing i am an intern getting paid in exposure", "I earn in dollars", "I am a Nigerian Politician"]
},{
  number:4,
  question:"How many assets do you have?",
  choices:["LOL", "1-3", "3-5", "5-10", "I am a Nigerian Politician"]
},{
  number:5,
  question:"How much debt are you in right now?",
  choices:["None", "Less than 100k", "100k - 500k", "500k - 1,000,000", "I am a Nigerian Politician"]
},{
  number:6,
  question:"Are you single ?",
  choices:["Yes", "No"],
}];

var answers= [];
var currentQuestion = 0;
var quizOver = false;


function displayCurrentQuestion() {
 
    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var question_no = questions[currentQuestion].number;
    var numChoices = questions[currentQuestion].choices.length;

    $('.question_no').html(question_no);
    $('.question').text(question);
    $('.options').html('<label class="options_label"></label>');

    var choice;
    for (i = 0; i<numChoices; i++){
    	choice = questions[currentQuestion].choices[i];
   $('<input type="radio" value=' + i + ' name="'+question_no+'" /><label for="' + i + '"><p id="pcolor">' + choice + '</p></label><br>').appendTo('.options_label');
          }
      }
 
  $(document).foundation()

  displayCurrentQuestion();

$(".next_button").on("click", function () {

     currentQuestion++;

     displayCurrentQuestion();

   });