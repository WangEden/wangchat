var socket = io('http://127.0.0.1:3000');

socket.on('test', function(data){
    alert(data);
})