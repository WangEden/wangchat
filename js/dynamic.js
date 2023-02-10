$('.top-message ul')[0].scrollTop = $('.top-message ul')[0].scrollHeight

// 鼠标拖动窗口
$('.menu').mousedown(function(e){
    let x1 = e.pageX;
    let y1 = e.pageY;
    let oddLeft = parseFloat($('.container').css('left')); 
    let oddTop = parseFloat($('.container').css('top'));
    let isclick = 1;
    $('.container').mousemove(function(e){
        if(isclick == 1){
            let x2 = e.pageX;
            let y2 = e.pageY;
            let newLeft = x2 - x1 + oddLeft;
            let newTop = y2 - y1 + oddTop;
            $('.container').css('left', newLeft + 'px').css('top', newTop + 'px');
        }
    }).mouseup(function(){
        isclick = 0;
    })
})

$(".fct>li").click(function(){
    $(this).addClass("active").siblings("li").removeClass("active");
    let id = $(this).attr('value');
    $('#'+id).removeClass('hide').find('*').removeClass('hide');
    $('#'+id).siblings('*').addClass('hide').find('*').addClass('hide');
    if(id != 'chat-module')
        $('.menu-information span').addClass('hide');
    else
        $('.menu-information span').removeClass('hide');
    // console.log($('#'+id).siblings('div'));
    // console.log($(this).attr('value'));
});

$('#chat-module .left-message-list ul .mes-items').click(function(){
    $(this).addClass("active").siblings(".mes-items").removeClass("active");
    let id = $(this).attr('value');
    // console.log(id);
    $('.menu-information span')[0].innerText = id;
    $('.top-message #'+id).removeClass('hide').siblings('*').addClass('hide');
})
