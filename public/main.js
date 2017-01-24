var socket = io();

$(document).ready(function() {
    $('form').submit(function() {
        //emit event 'message'' with data = #m.val()...KB
        socket.emit('message', $("#m").val());
        $('#m').val('');
        return false;
    });

    socket.on('message', function(msg) {
        $('#messages').append($('<li>').text(msg));
    });
})