var main = function() {
  "use strict";
  var fadeInTime = 1000
  var delayCount = [fadeInTime, 3000, 4000]
  //this fades in the image in the beginning
  $("#picture").hide().fadeIn(fadeInTime)


  var aboutMe = "I am an ambitious full-stack web developer that is always looking for a mental challenge.  I never want to stop learning and am making a career out of this pursuit."

  var myProjectsText = "I am always working on projects to keep myself busy.  Take a look at a couple of them!"

  var blogText = "Throughout my learning process, I have written both technical blogs about coding and 'cultural' blogs about myself and about the tech industry.  Have a look at them!"

  var contact = ["Email: Travis.William.Allen@gmail.com", "Phone: 347-599-8150", "Social Media: See links below!"]

//fades in the header
  $("#Header").hide().delay(fadeInTime).fadeIn(fadeInTime);
//converts tabs into an array, then does something for each of them
  $(".tabs span").toArray().forEach(function(element) {
    //fades in all tabs
      $(element).hide().delay(fadeInTime*2).fadeIn(fadeInTime)
    //keeps body content hidden until a tab gets clicked on
      $("body .content").hide()
    //event that occurs when a click occurs
      $(element).on("click", function() {

        var $content;

        $(".tabs span").removeClass("active");
        $(element).addClass("active");
        $("body .content").empty();

        if($(element).parent().is(":nth-child(1)")) {
            $("body .content").append($("<p>").text(aboutMe));
            $("body .content").fadeIn();
        } else if ($(element).parent().is(":nth-child(2)")) {
            $("body .content").append($("<p>").text(myProjectsText));
            $("body .content").append($("<p><a href = 'projects/projects_index.html'>- My Projects -</a></p>"));
            $("body .content").hide().fadeIn();
        } else if ($(element).parent().is(":nth-child(3)")) {
            $("body .content").append($("<p>").text(blogText));
            $("body .content").append($("<p><a href = 'blog/blog-index.html'>- Blog Index -</a></p>"));
            $("body .content").hide().fadeIn();
        } else if ($(element).parent().is(":nth-child(4)")) {
            contact.forEach(function (info) {
              $("body .content").append($("<p>").text(info));
              $("body .content").hide().fadeIn();
            });
          }


      });
    //increases fontSize and fontweight when you hover over tabs
      $(element).on('mouseover', function(event){
          event.preventDefault()
          $(element).css({"fontSize":"1.25em", "fontWeight": "bold"})
      });
    //returns tabs back to normal when the mouse leaves
      $(element).on('mouseleave', function(event) {
        event.preventDefault()
        $(element).css({"fontSize": "1em", "font-weight": "normal"})
      });

  });

//fades in social media links
  $('.socialnet div img').hide().delay(fadeInTime*3).fadeIn(1000);

//increases size of social media link when it is hovered over
  $('.socialnet div img').on('mouseover', function(event){
    event.preventDefault()
    $(this).css({"width": "4em"});
  });
//returns social media logo to normal size after you leave
  $('.socialnet div img').on('mouseleave', function(event){
    event.preventDefault()
    $(this).css({"width": "3em"})
  })

};


$(document).ready(main);