var socket = io();
var nickname = null;

$(document).ready(function() {
    $('form').submit(function() {
        //emit event 'message'' with data = #m.val()...KB
        $('#messages').append($('<li>').text(nickname + ': ' + $("#m").val())).addClass('outgoing');
        socket.emit('message', $("#m").val(), nickname);
        $('#m').val('');
        return false;
    });

    socket.on('setNickname', function() {
        nickname = prompt("Please choose a nickname.");
    });

    socket.on('message', function(msg, nickname) {
        $('#messages').append($('<li>').text(nickname + ": " + msg).addClass("incoming"));
    });
})