/*$(document).ready(function(){
                             
	$("#list-example").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 900);
	});
});

*/

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('activited');
        })
        $(this).addClass('activited');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 800, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.horizont-nav li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.horizont-nav li').removeClass("activited");
            currLink.addClass("activited");
        }
        else{
            currLink.removeClass("activited");
        }
    });
}
/*
$(document).ready(function () {

    $('a[href^="#site-main"]').addClass('active');

//smoothscroll
    $('.horizont-nav li a').on('click', function (e) {
        e.preventDefault();
        //  $(document).off("scroll");
        var athis = this;
        var target = this.hash,
                menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 800, 'swing', function () {
            window.location.hash = target;
            $('.menuitem').removeClass('activited');
            $(athis).addClass('activited');

        });    
    });    

    $(window).scroll(function (event) {
        var scrollPos = $(document).scrollTop();
        if (scrollPos === 0)
        {
            $('a[href^="#site-main"]').addClass('active');
            return;
        }    
        $('.horizont-nav li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.horizont-nav li a').removeClass("activited");
                currLink.addClass("activited");
            } else {
                currLink.removeClass("activited");
            }
        });    
    })    
});*/