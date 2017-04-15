var answers = [];
      var currentQuestion = 0;
      var quizOver = false; 

      function displayCurrentQuestion() {

          console.log("In display current Question");

          var question = questions[currentQuestion].question;
          var question_no = questions[currentQuestion].number;
          var numChoices = questions[currentQuestion].choices.length;


          $('.question_no').html(question_no+"/"+numChoices);
          $('.question').text(question);

          $('.options').html('<label class="options_label"></label>');

          var choice;
          for (i = 0; i < numChoices; i++) {
              choice = questions[currentQuestion].choices[i];
              $('<input type="radio" value=' + i + ' name="'+question_no+'" /><label for="' + i + '"><p id="pcolor">' + choice + '</p></label><br>').appendTo('.options_label');
          }
      }

      $(document).ready(function () {
        displayCurrentQuestion()
      });



