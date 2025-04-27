$(document).ready(function(){
    $(".faq-ques").click(function(){
      $(".faq-ans").not($(this).next()).slideUp();
  
      $(".faq-ques .icon").text("+")
      $(this).next(".faq-ans").slideToggle();
  
      //change the icon(+ to -)
      $(this).children(".icon").text(
          $(this).next(".faq-ans").is(":visible")?"-":"+"
      );
    });
  });

  $(document).ready(function() {
    console.log('Research page loaded!');
  });

  $(document).ready(function(){
    $('.tab').click(function(){
        $('.tab').removeClass('active');
        $(this).addClass('active')
        $('.tab-content').removeClass('active');
        $('#' +$(this).data('tab')).addClass('active')
    });
});
  
  
  //$('document').ready(function(){
   // $('.tab').click(function(){
       // $('.tab').removeClass('active');
       // $(this).addClass('active')
       // $('.tab-content').removeClass('active');
      //  $('#' +$(this).data('tab')).addClass('active')
   // });
//});

