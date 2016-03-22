$(function() {
  $("button#hello").click(function() {
    $("ul#dog").prepend("<li>Woof</li>");
    $("ul#cat").prepend("<li>Hiss</li>");
    $("ul#dog").children("li").first().css("background-color", "green");
    $("ul#cat").children("li").first().css("background-color", "red");
  });

  $("button#goodbye").click(function() {
    $("ul#dog").prepend("<li>Bark</li>");
    $("ul#dog").after("<p>This is not on the list</p>");
    $("ul#cat").prepend("<li>Meow</li>");
    $("ul").children("li").last().click(function() {
      $(this).after("<p>This is not on the list</p>");
    });
  });

  $("button#adios").click(function() {
    $("ul#dog").prepend("<li>Arf</li>");
    $("ul#cat").prepend("<li>Purr</li>");
    $("ul").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
