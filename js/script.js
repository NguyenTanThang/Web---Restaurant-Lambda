$(function () {
    $(document).scroll(function () {
      var $nav = $("#my-nav");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });