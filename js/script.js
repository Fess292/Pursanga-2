// slider
var b_block_2 = document.querySelector('.b-block-2'); 
var b_block_2_Btn = document.querySelector('.b-block-2').querySelectorAll('.b-btn');
var b_block_2_Sliders = document.querySelector('.b-block-2').querySelectorAll('.b-slider');

var b_block_5 = document.querySelector('.b-block-5'); 
var b_block_5_Btn = document.querySelector('.b-block-5').querySelectorAll('.b-btn');
var b_block_5_Sliders = document.querySelector('.b-block-5').querySelectorAll('.b-slider');

var b_block_8 = document.querySelector('.b-block-8'); 
var b_block_8_Btn = document.querySelector('.b-block-8').querySelectorAll('.b-btn');
var b_block_8_Sliders = document.querySelector('.b-block-8').querySelectorAll('.b-slider');

var b_block_9 = document.querySelector('.b-block-9'); 
var b_block_9_Btn = document.querySelector('.b-block-9').querySelectorAll('.b-btn');
var b_block_9_Sliders = document.querySelector('.b-block-9').querySelectorAll('.b-slider');

function b_sliders(block, btn) {
    
    for (var k=0; k < btn.length; k++) {
        Ddd(k, block, btn);
    }
}

function Ddd(k, block, btn) {
    var index = k;
    btn[index].addEventListener('click', function (k) {
        for (var y=0; y < block.length; y++) {
            block[y].classList.remove("active");
            btn[y].classList.remove("view");
        }
        block[index].classList.add("active");
        btn[index].classList.add("view");
    });
}

// в лево
function b_sliderLeft(block, btn) {
    var position = 0;
    var positionNext = 0;
    for (var i=0; i < btn.length; i++) {
        if (btn[i].className == "b-btn view") {
            position = i;
        }
    }
    if (position == 0) {
        positionNext = (btn.length - 1);
    } else {
        positionNext = position - 1;
    }
    block[position].classList.remove("active");
    btn[position].classList.remove("view");
    block[positionNext].classList.add("active");
    btn[positionNext].classList.add("view");
}
// в право
function b_sliderRight(block, btn) {
        var position = 0;
        var positionNext = 0;
        for (var i=0; i < btn.length; i++) {
            if (btn[i].className == "b-btn view") {
                position = i;
            }
        }
        if (position == (btn.length - 1)) {
            positionNext = 0;
        } else {
            positionNext = position + 1;
        }
        block[position].classList.remove("active");
        btn[position].classList.remove("view");
        block[positionNext].classList.add("active");
        btn[positionNext].classList.add("view");
}
// перелистывания пальцем
function b_touchSlider(box, slider, btn) {

    var touchStartX = null; //Точка начала касания
    var touchPositionX = null; //Текущая позиция
    const sensitivity = 50; // Чувствительность

    //Перехватываем события
    box.addEventListener("touchstart", function (e) {TouchStart(e)}); //Начало касания
    box.addEventListener("touchmove", function (e) {TouchMove(e)}); //Движение пальцем по экрану
    box.addEventListener("touchend", function (e) {TouchEnd(e)}); //Пользователь отпустил экран

    function TouchStart(e) {
        touchPositionX = null;
        //Получаем текущую позицию касания
        touchStartX = e.changedTouches[0].pageX;
    }

    function TouchMove(e) {
        //Получаем новую позицию
        touchPositionX = e.changedTouches[0].pageX;
    }

    function TouchEnd(e) {
        if ((touchPositionX < (touchStartX - sensitivity )) && (touchPositionX != null)) {
            b_sliderRight(slider, btn);
        } else if ((touchPositionX > (touchStartX + sensitivity)) && (touchPositionX != null)) {
            b_sliderLeft(slider, btn);
        }
    }
}


b_sliders(b_block_2_Sliders, b_block_2_Btn);
b_touchSlider(b_block_2, b_block_2_Sliders, b_block_2_Btn);

b_sliders(b_block_5_Sliders, b_block_5_Btn);
b_touchSlider(b_block_5, b_block_5_Sliders, b_block_5_Btn);

b_sliders(b_block_8_Sliders, b_block_8_Btn);
b_touchSlider(b_block_8, b_block_8_Sliders, b_block_8_Btn);

b_sliders(b_block_9_Sliders, b_block_9_Btn);
b_touchSlider(b_block_9, b_block_9_Sliders, b_block_9_Btn);

// function onEntry(entry) {
//     entry.forEach(change => {
//       if (change.isIntersecting) {
//         change.target.classList.add('element-show');
//       }
//     });
//   }
//   let options = { threshold: [0.5] };
//   let observer = new IntersectionObserver(onEntry, options);
//   let elements = document.querySelectorAll('.fade');
//   for (let elm of elements) {
//     observer.observe(elm);
//   }

// adc.scroll = {
//     css:'.b-block-5',
//     butWrap: '.header__link',
//     control: 0,
//     mas: [],
//     init: function(){
//       var mas = this.mas,
//         $but = $(this.butWrap),
//         $butWrap = $but.parent(),
//         $scroll = $(window).scrollTop();
//       $(this.css).each(function(e){
//         var $this = $(this);
//         if($scroll + window.innerHeight > $this.offset().top + $this.height() && $.inArray(e, mas) == '-1'){
//           mas.push(e);
//           $this.addClass('scrollOn');
//           setTimeout(function(){$this.addClass('noAnim')},500);
//         } 
//       });
//       if($scroll >= $butWrap.offset().top && this.control == 0){
//         $but.addClass('wow');
//         this.control++;
//       }else if($scroll < $butWrap.offset().top && this.control == 1){
//         $but.removeClass('scrollOn');
//         this.control--;
//       }
//     }
//   }



$(window).scroll(function() {
    var height = $(window).scrollTop();
     /*Если сделали скролл на 100px задаём новый класс для header*/
    if(height > 6468){
    $('.b-img-a').addClass('animate');
    } else{
    /*Если меньше 100px удаляем класс для header*/
    $('.b-img-a').removeClass('animate');
    }
    });
    
$(window).scroll(function() {
        var height = $(window).scrollTop();
         /*Если сделали скролл на 100px задаём новый класс для header*/
        if(height > 6468){
        $('.b-p').addClass('animate');
        } else{
        /*Если меньше 100px удаляем класс для header*/
        $('.b-p').removeClass('animate');
        }
        });

$(window).scroll(function() {
    var height = $(window).scrollTop();
        /*Если сделали скролл на 100px задаём новый класс для header*/
    if(height > 5484){
    $('.first').addClass('anim');
    } else{
    /*Если меньше 100px удаляем класс для header*/
    $('.first').removeClass('anim');
    }
    });
$(window).scroll(function() {
    var height = $(window).scrollTop();
    /*Если сделали скролл на 100px задаём новый класс для header*/
    if(height > 5484){
    $('.second').addClass('anim2');
    } else{
    /*Если меньше 100px удаляем класс для header*/
    $('.second').removeClass('anim2');
    }
    });
$(window).scroll(function() {
    var height = $(window).scrollTop();
        /*Если сделали скролл на 100px задаём новый класс для header*/
    if(height > 5484){
    $('.third').addClass('anim3');
    } else{
    /*Если меньше 100px удаляем класс для header*/
    $('.third').removeClass('anim3');
    }
    });
$(window).scroll(function() {
    var height = $(window).scrollTop();
        /*Если сделали скролл на 100px задаём новый класс для header*/
    if(height > 500){
    $('.b-slider').addClass('wow');
    } else{
    /*Если меньше 100px удаляем класс для header*/
    $('.b-slider').removeClass('wow');
    }
    });

    var wow = new WOW(
        {
        
        mobile: false,
        
        });
    // var p = $("#1").offset().top;