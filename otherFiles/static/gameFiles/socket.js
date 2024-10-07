var socket = io();
var socketid = ''
socket.on('connect', function() {
    socket.emit('begin_chat', "joined");
    socketid = socket.id
});

socket.on('rockPositions', function(data) {
    startRockPos = data[0]
    generatedRocks = data[1]
});



function sendPlace(data){
  stuff = [data, socketid]
  socket.emit('sendPlace', stuff)
}

socket.on('recievePlace', function(data) {
    dataRecieved += 1
    otherPlayerPosition.push(data)
    //IF USING A SLOW WEB SERVER:
    if(waitSocket){
      recieveCoords(20)
      waitSocket = false
    } else {
      waitSocket = true
    }
    //IF USING A FAST WEB SERVER:
    //recieveCoords(20)
});

function sendShoot(movex, movey, santax, santay, vx, vy){
  var stuff = [[movex, movey, santax, santay, vx, vy], socketid]
  socket.emit('sendShoot', stuff)
}

socket.on('recieveShoot', function(data) {
  if(p2AllowShooting){
    createBullet(data[2], data[3], data[0], data[1], data[4], data[5])
  }
});
function santaDied(){
  var stuff = [true, socketid]
  socket.emit('santaDied', stuff)
}

socket.on('santa2Died', function(data) {
  bulletCollisionSanta2()
});

function gameFinished(){
  var stuff = [true, socketid]
  socket.emit('gameOver', stuff)
}