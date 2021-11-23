$("#chatme").click(function () {
    $(".widget").toggleClass("open");
  });

//img easter egg
$('body').on('click','#img',function(){
    if ($('#img').attr('src') === 'img/fahd.jpg') {
        alert('boop');
     }
 });

//light/dark mode
