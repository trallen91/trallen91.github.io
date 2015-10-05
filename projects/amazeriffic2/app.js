var main = function () {
  "use strict";

  var toDos = [
  "Buy a coffee",
  "Choose a stack",
  "Eat a snack"]

  $(".tabs span").toArray().forEach(function(element) {
    $(element).on("click", function() {
      var $element = $(element),
      $content;

      $(".tabs span").removeClass("active");
      $(element).addClass("active");
      $("main .content").empty();

      if ($element.parent().is(":nth-child(1)")){
        $content = $("<ul>");
        for (var i = (toDos.length - 1); i >= 0; i--) {
          $content.append($("<li>").text(toDos[i]));
        }
        $("main .content").append($content);
      } else if ($element.parent().is(":nth-child(2)")) {
        $content = $("<ul>");
        toDos.forEach(function(todo) {
          $content.append($("<li>").text(todo))
        });
        $("main .content").append($content)
      } else if ($element.parent().is(":nth-child(3)")) {
        $content = $("<section class='todo-input'><p>Add a todo to your list</p><input type = 'text'></section>")
        $("main .content").append($content)

        $(".todo-input").on("keypress", function(event) {
          if (event.keyCode === 13) {
            var todo = $(".todo-input input").val()
            toDos.push(todo)
            $(".todo-input input").val("")
        }
        })
      }

      return false
    })
  })

  $(".tabs a:first-child span").trigger("click");

}

$(document).ready(main);