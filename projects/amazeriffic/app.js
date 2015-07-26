var main = function(toDoObjects) {
  "use strict";

  var toDos = toDoObjects.map(function(toDo) {
    return toDo.description;
  });

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
          console.log("the tags tab was clicked!");

          // var organizedByTag = [
          // {
          //   "name": "shopping",
          //   "toDos": ["clothes"]
          // },
          // {
          //   "name": "coding",
          //   "toDos": ["learn Python", "improve Front-End skills"]
          // }];

          // organizedByTag.forEach(function(tag) {
          //   var $tagName = $("<h3>").text(tag.name),
          //     $content = $("<ul>");

          //     tag.toDos.forEach(function(description) {
          //       var $li = $("<li>").text(description);
          //       $content.append($li);

          //     });
          //     $("main .content").append($tagName);
          //     $("main .content").append($content);
          // });
      }
      else if ($element.parent().is(":nth-child(4)")) {
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


$(document).ready(function() {
  $.getJSON("todos.json", function(toDoObjects){
    main(toDoObjects);
  });
});