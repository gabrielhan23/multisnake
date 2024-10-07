
function createBullet(x, y, moveX, moveY, vx, vy) {
  var distanceFromTopA = y-totalDistanceFromTop
  var bullet = shootThat.physics.add.sprite(x, distanceFromTopA, 'bullet');

  bullet.setScale('0.05')
  bullet.setBounce(0.2)
  //recieveCoords(15)
  bullets.add(bullet)
  shootThat.physics.moveTo(bullet, moveX, moveY-totalDistanceFromTop, fireSpeed);
  bullet.setVelocityY(bullet.body.velocity.y+(-1*vy*game.loop.actualFps*userGameSpeed))
  //bullet.setVelocityX(bullet.body.velocity.x+(-1*vx))
  setTimeout(function () {
      bullet.destroy()
  }, 5000)
}