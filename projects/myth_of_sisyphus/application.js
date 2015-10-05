var questionAnswer = [
{question: "What is 1 + 1?", answer: "2"}, {question: "What is 2 + 2?", answer: "4"}
]

function backToStart() {
  var startRow = $(".mountain tr").last().index()
  var startColumn = $(".mountain td").first().index();
  var $startPosition = $(".mountain tr:eq("+startRow+") td:eq("+startColumn+")")
  $startPosition.addClass("active")
  return $startPosition
}

function moveUp() {
  var currentColumn = $(".active").index()
  var currentRow = $(".active").parent().index()
  var newRow = (currentRow - 1)
  var newColumn = (currentColumn + 1)
  var $newPosition = $(".mountain tr:eq("+newRow+") td:eq("+newColumn+")")
  var $currentPosition = $(".mountain tr:eq("+currentRow+") td:eq("+currentColumn+")")
  $currentPosition.removeClass("active")
  $newPosition.addClass("active")
  return $newPosition
}

function findCurrentRow(){
  var currentRow = $(".active").parent().index()
  return currentRow
}

function findCurrentColumn(){
  var currentColumn = $(".active").index()
  return currentColumn
}
function fallDownOne() {
  //logic to have it slide down diagonally
  var currentColumn = $(".active").index()
  var currentRow = $(".active").parent().index()
  var newRow = (currentRow + 1)
  var newColumn = (currentColumn - 1)
  var $newPosition = $(".mountain tr:eq("+newRow+") td:eq("+newColumn+")")
  var $currentPosition = $(".mountain tr:eq("+currentRow+") td:eq("+currentColumn+")")
  $currentPosition.removeClass("active")
  $newPosition.addClass("active")
}

function fallDown() {
  var msDelay = 100
  var i = msDelay
  var numOfFalls = (findCurrentColumn() + 1)

  //this loop makes it fall down to the bottom
  while (i < (numOfFalls * msDelay)) {

      setTimeout(function() {
        fallDownOne();
      }, i);

      i += msDelay
    }

};

function appendQuestion(num) {
  $("#question").append(questionAnswer[num]["question"]);
}

function userAnswer() {
  return $("#answer").val()
};

function compareAnswer(num) {
  if (userAnswer() === questionAnswer[num]["answer"]) {
    return true
  } else {
    return false
  }
}

function playGame() {

}

$(document).ready(function() {

  backToStart();
  // for (var i = 0; i < questionAnswer.length; i++){
    var counter = 0
    appendQuestion(counter);
    $("#answer_submit").on('click', function(e){
      if (compareAnswer(counter) == true) {
        moveUp();

      } else {
        fallDown();
      };
    })


  // $(document).on("keyup", function(event){
  //   //sisyphus moves diagonal upon hitting button a
  //   if (event.keyCode == 65) {
  //     moveUp();
  //     if (findCurrentRow() === 0) {
  //       fallDown();
  //     };
  //   }
  // })
});
