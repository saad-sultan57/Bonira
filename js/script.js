
$(document).ready(function() {

  //Javascript code for stricky Haider----------------------------------

  // Get the navbar element
  var navbar = $("#myheader");

  // Get the initial offset position of the navbar
  var stickyOffset = navbar.offset().top;

  // Add the 'sticky' class to the navbar when scrolling past its initial position
  $(window).scroll(function() {
    if ($(window).scrollTop() >= stickyOffset) {

      navbar.addClass("sticky");
       navbar.slideDown();
      
    } else {
      navbar.removeClass("sticky");
    }
  });
  //Javascript code for stricky Haider End--------------------------------


  // When the button is clicked, scroll to the top of the page
  $("#scrollToTopBtn").on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  // Show the button when the user scrolls down 20px from the top of the document
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      $("#scrollToTopBtn").fadeIn();
    } else {
      $("#scrollToTopBtn").fadeOut();
    }
  });


});
