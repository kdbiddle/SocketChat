/**
 * This is a basic chat application built on socket.io.
 * @author: Kevin Biddle
 */

//Load dependencies

//Server dependencies
var express = require('express');
var app = express();
var http = require('http').Server(app);

//Web socket
var io = require('socket.io')(http);

//Read [port] from env
var port = process.env.port || 8080;

//Middleware for file serving
app.use(express.static('public'));

//Routing
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

//Socket handling
io.on('connection', function(socket) {
    console.log("A user connected!");

    socket.on('message', function(msg) {
        console.log('Message: ' + msg);
        io.emit('message', msg);
        // socket.broadcast.emit('message', msg);
    })

    socket.on('disconnect', function() {
        console.log("A user disconnected!");
    });
})

//Start listening
http.listen(port, function() {
    console.log('Listening on ' + port);
});