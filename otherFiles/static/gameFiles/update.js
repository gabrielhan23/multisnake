function update(time, delta) {
    //recieveCoords(7)
    //movement actions
    gameMovement(this)
    //recieveCoords(1)
    //update rock positions
    updateRocks(this)
    //recieveCoords(2)
    //move background
    background.tilePositionY += gameSpeed;
    totalDistanceFromTop += gameSpeed;
    //if(!santa2Alive){
        santa2.y -= gameSpeed
    //}

    //check if santa died
    checkDeath(this)
    //recieveCoords(3)
    //revive if dead
    revivePlayer(this)
    //recieveCoords(4)
    //send coord to server
    //console.log('sending coors')
    sendCoords()
    recieveCoords(5)
    
    //santa2.setVelocity(-100)
    //santa2.setAcceleration(0)
    if(otherPlayers && false){ //true means that they are in frame
        santa2.x = otherPlayers[0]
        santa2.y = otherPlayers[1]
    }


    updateScoreText()
    //recieveCoords(6)
}