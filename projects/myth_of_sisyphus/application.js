function backToStart() {
  var startRow = $("tr").last().index()
  var startColumn = $("td").first().index();
  var $startPosition = $("tr:eq("+startRow+") td:eq("+startColumn+")")
  $startPosition.addClass("active")
  return $startPosition
}

function moveUp() {
  var currentColumn = $(".active").index()
  var currentRow = $(".active").parent().index()
  var newRow = (currentRow - 1)
  var newColumn = (currentColumn + 1)
  var $newPosition = $("tr:eq("+newRow+") td:eq("+newColumn+")")
  var $currentPosition = $("tr:eq("+currentRow+") td:eq("+currentColumn+")")
  $currentPosition.removeClass("active")
  $newPosition.addClass("active")
  return $newPosition
}

function findCurrentRow(){
  var currentRow = $(".active").parent().index()
  return currentRow

}

function fallDownOne() {
  //logic to have it slide down diagonally
  var currentColumn = $(".active").index()
  var currentRow = $(".active").parent().index()
  var newRow = (currentRow + 1)
  var newColumn = (currentColumn - 1)
  var $newPosition = $("tr:eq("+newRow+") td:eq("+newColumn+")")
  var $currentPosition = $("tr:eq("+currentRow+") td:eq("+currentColumn+")")
  $currentPosition.removeClass("active")
  $newPosition.addClass("active")
  return "It fell down one"
}

function fallDown() {
  i = 1000
  while (i < 10000) {

  setTimeout(function() {
    fallDownOne();
  }, i);

  i += 1000
}

};

$(document).ready(function() {
  backToStart();
  $(document).on("keyup", function(event){
    //sisyphus moves diagonal upon hitting button a
    if (event.keyCode == 65) {
      moveUp();
      if (findCurrentRow() === 0) {
        fallDown();
      };
    }
  })
});
