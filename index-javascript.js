var main = function() {
  "use strict";


  var aboutMe = "I am an ambitious full-stack web developer that is always looking for a mental challenge.  I never want to stop learning and am making a career out of this pursuit."

  var myProjectsText = "I am always working on projects to keep myself busy.  Take a look at a couple of them!"

  var blogText = "Throughout my learning process, I have written both technical blogs about coding and 'cultural' blogs about myself and about the tech industry.  Have a look at them!"

  var contact = ["Email: Travis.William.Allen@gmail.com", "Phone: 347-599-8150", "Social Media: See links below!"]


  $(".tabs span").toArray().forEach(function(element) {
      $(element).on("click", function() {

        var $content;

        $(".tabs span").removeClass("active");
        $(element).addClass("active");
        $("body .content").empty();

        if($(element).parent().is(":nth-child(1)")) {
            $("body .content").append($("<p>").text(aboutMe));
        } else if ($(element).parent().is(":nth-child(2)")) {
            $("body .content").append($("<p>").text(myProjectsText));
            $("body .content").append($("<p><a href = 'projects/projects_index.html'>- My Projects -</a></p>"));
        } else if ($(element).parent().is(":nth-child(3)")) {
            $("body .content").append($("<p>").text(blogText));
            $("body .content").append($("<p><a href = 'blog-list.html'>- Blog Index -</a></p>"));
        } else if ($(element).parent().is(":nth-child(4)")) {
            contact.forEach(function (info) {
              $("body .content").append($("<p>").text(info));
            });
          }


      });
  });

};


$(document).ready(main);