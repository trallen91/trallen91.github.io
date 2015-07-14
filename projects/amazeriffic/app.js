var main = function() {
  "use strict";

  var toDos = ["learn Python", "watch Harvard CS50 Lectures", "Complete Web App Development Book"];

  $(".tabs span").toArray().forEach(function(element) {
    $(element).on("click", function() {
      var $element = $(element),
          $content,
          $toDoTextBox,
          $toDoButton;

      $(".tabs a span").removeClass("active");
      $element.addClass("active");
      $("main .content").empty();

      if ($element.parent().is(":nth-child(1)")) {
        $content = $("<ul>");
        // $content.append($("<li>").text(toDos[0]))
        for (var i = (toDos.length - 1); i >= 0; i--) {
          $content.append($("<li>").text(toDos[i]));
        }
        $("main .content").append($content);
      } else if ($element.parent().is(":nth-child(2)")) {
          $content = $("<ul>");
          toDos.forEach(function(todo) {
            $content.append($("<li>").text(todo));
          });
          $("main .content").append($content);
      } else if ($element.parent().is(":nth-child(3)")) {
          $toDoTextBox = $("<input>");
          $toDoButton = $("<button>").text("+");
          $("main .content").append($toDoButton);
          $("main .content").prepend($toDoTextBox);

          var addItemToDo = function() {
            if ($("input").val() !== "") {
              toDos.push($("input").val());
              $("input").val("");
            }
          }

          $("button").on("click", function(event) {
            addItemToDo();
          });

          $("input").on("keypress", function(event) {
              if (event.keyCode === 13) {
                addItemToDo();
            }
          });
        }

    });
  });
  $(".tabs a:first-child span").trigger("click");
};


$(document).ready(main);