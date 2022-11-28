$(document).ready(function(){
    const swiper = new Swiper('.popup', { /* 팝업을 감싼는 요소의 class명 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'bullets',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        },

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.btn_prev',  
        },

    });


    $('.colect ul li').on('click', function(){
        $('.colect ul li').removeClass('active');
        $(this).addClass('active');
    });
    

    let colect_h = $('.colect ul li .detail').height() + $('.colect ul li').height()
    $('.colect').height(colect_h)
    $(window).resize(function(){
        colect_h = $('.colect ul li .detail').height() + $('.colect ul li').height()
        $('.colect').height(colect_h)
    })

})