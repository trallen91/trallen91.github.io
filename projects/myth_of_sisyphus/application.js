function backToStart() {
  startRow = $("tr").last().index()
  startColumn = $("td").first().index();
  $startPosition = $("tr:eq("+startRow+") td:eq("+startColumn+")")
  $startPosition.addClass("active")
  return $startPosition
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
