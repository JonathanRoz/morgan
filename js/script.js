$(window).scroll(function(){
    console.log($(window).scrollTop())
        
    if($(window).scrollTop() > 562 ){
        $(".menu").addClass("low")  
    }else{
        $(".menu").removeClass("low")
    }



})

$(".testi-main-slider").slick({
    slidesToShow:2,
    slidesToScroll:1,
    arrows:false,
    dots:true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:true,
            dots:false,
            arrows:true,
            prevArrow:'<i class="fas fa-arrow-up top"></i>',
            nextArrow:'<i class="fas fa-arrow-down down"></i>',
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:true,
            dots:false,
            arrows:true,
            prevArrow:'<i class="fas fa-arrow-up top"></i>',
            nextArrow:'<i class="fas fa-arrow-down down"></i>',
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    

})





// $(window).scroll(function(){
//     console.log($(window).scrollTop())
  
  
//     // if($(window).scrollTop() > 380){
//     //   $(".menu").addClass("low")
//     // }else{
//     //   $(".menu").removeClass("low")
//     }
//   })
    
