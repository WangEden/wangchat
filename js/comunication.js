var textarea = $('.message-content');
var button = $('.message-send');
var index = 0;
var time = '00:00'

function send(){
    let value = textarea[0].value;
    if(value == ''){

    }
    else{
        let id = $('.menu-information span').text(); 
        // console.log(id);
        let ul = $('.top-message #' + id);
        ul.append('<li><p>'+ value + '</p></li>');
        ul.find('li').addClass('message me');
        socket.send(value);
        textarea[0].value = '';
        ul[0].scrollTop = ul[0].scrollHeight;
    }
}

textarea.keydown(function(e){
    if(e.keyCode == 13){
        // 阻止Enter默认功能换行
        e.preventDefault();
        send();
    }
})

button.click(function(){
    send();
})

var socket = new WebSocket('ws://127.0.0.1:3000');

socket.addEventListener('open', function(){
    console.log('已连接服务器');
})