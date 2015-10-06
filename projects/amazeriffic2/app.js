var organizeByTags = function(toDoObjects) {
  var tags = [];
  toDoObjects.forEach(function(toDo) {
    toDo.tags.forEach(function(tag) {
      if (tags.indexOf(tag) === -1) {
        tags.push(tag)
      }
    });
  })
  var tagObjects = tags.map(function(tag) {
    var toDosWithTag = [];
    toDoObjects.forEach(function(toDo) {
      if(toDo.tags.indexOf(tag) !== -1) {
        toDosWithTag.push(toDo.description)
      }
    });

    return {"name": tag, "toDos": toDosWithTag}
  });
  return tagObjects;
}

var main = function (toDoObjects) {
  "use strict";

  var toDos = toDoObjects.map(function(toDo) {
    return toDo.description;
  })

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
      } else if ($element.parent().is(":nth-child(3)")){
        console.log("the tags tab was clicked")
        var organizedByTag = organizeByTags(toDoObjects)

        organizedByTag.forEach(function(tag) {
          var $tagName = $("<h3>").text(tag.name),
              $content = $("<ul>");
          tag.toDos.forEach(function(description) {
            var $li = $("<li>").text(description);
            $content.append($li);
          })

          $("main .content").append($tagName);
          $("main .content").append($content);
        })
      }
      else if ($element.parent().is(":nth-child(4)")) {
        $content = $("<section class='description-input'><p>Description</p><input type = 'text'></section><section class='tag-input'><p>Tag (Separate by commas, no spaces):</p><input type = 'text'></section><br><button>Submit</button>")
        $("main .content").append($content)

        $("button").on("click", function(event) {
          var description = $(".description-input input").val()
          var tags = $(".tag-input input").val().split(",");
          toDoObjects.push({"description": description, "tags": tags});

          toDos = toDoObjects.map(function(toDo) {
            return toDo.description;
          })

          $(".description-input input").val("")
          $(".tag-input input").val("")
        })
      }

      return false
    })
  })

  $(".tabs a:first-child span").trigger("click");

}

$(document).ready(function(){
  $.getJSON("todos.json", function(toDoObjects) {
    console.log(toDoObjects)
    main(toDoObjects)
  })
});