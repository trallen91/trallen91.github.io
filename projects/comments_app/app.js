var main = function() {
  "use strict";

  //"event listener" that adds a line once you click on the button
  $(".comment-input button").on("click", function(event) {
    var $new_comment;
    if($(".comment-input input").val() !== "") {
      $new_comment = $("<p>").text($(".comment-input input").val());
      $new_comment.hide();

      $(".comments").append($new_comment);
      $new_comment.fadeIn();
      // below clears out the input box after clicking on it
      $(".comment-input input").val("");

    }
  })

  //hitting enter in input box also has same effect
  $(".comment-input input").on("keypress", function(event) {
      var $new_comment;
      if(event.keyCode === 13) {
        $new_comment = $("<p>").text($(".comment-input input").val());
        $new_comment.hide();

        $(".comments").append($new_comment);
        $new_comment.fadeIn();
        // below clears out the input box after clicking on it
        $(".comment-input input").val("");
      }
    })
};

$(document).ready(main);