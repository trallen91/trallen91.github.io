function backToStart() {
  $start = $("tr:eq(4) td:eq(0)")
  $start.addClass("active")
  return $start
}

function moveUp() {
  currentColumn = $(".active").index()
  currentRow = $(".active").parent().index()
  newRow = (currentRow - 1)
  newColumn = (currentColumn + 1)
  $newPosition = $("tr:eq("+newRow+") td:eq("+newColumn+")")
  // debugger
  $currentPosition = $("tr:eq("+currentRow+") td:eq("+currentColumn+")")
  $currentPosition.removeClass("active")
  $newPosition.addClass("active")
  return $newPosition
}

$(document).ready(function() {
  // backtoStart();
})
