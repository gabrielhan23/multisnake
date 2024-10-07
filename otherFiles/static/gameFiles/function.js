
// called when player (santa) collides with a rock
function rockCollision() {
    p1HitCounter++;
    p2HitCounter++;
    gameSpeed = 0
    santaAlive = 0
}


function bulletCollision() {
    santa.play("dead1", true)
    santa.setScale(0.30)
    santa.setVelocity(0)
    rockGroup.setVelocityX(0)
    rockGroup.setVelocityY(0)
    allowShooting = false
    collider = null
    setTimeout(function () {
        revive()
    }, 2000)
    gameSpeed = 0
    santaAlive = 0
    santaDied()
}

function bulletCollisionSanta2() {
    santa2.play("dead2", true)
    santa2.setVelocity(0)
    santa2.setScale(0.30)
    santa2Alive = false
    p2AllowShooting = false
    setTimeout(function () {
        reviveSanta2()
    }, 2000)
}

// called only when rockCollision() was called to reset values
function revive() {
    santa.stop("dead1", true);
    santa.setScale(0.15)
    santa.setTexture("normal1")
    reviving = true;
    gameSpeed = userGameSpeed;
    santaAlive = 1
}

function reviveSanta2() {
    santa2.stop("dead2", true)
    santa2.setTexture("normal2")
    santa2.setScale(0.15)
    santa2Alive = true
}

// checks whether santa has collided with a rock
// if true then gameSpeed = -1 else gameSpeed = 0
function checkDeath(game) {

    if (santaAlive == 0) {
        santa.setVelocity(0)
        rockGroup.setVelocityX(0)
        rockGroup.setVelocityY(0)
        allowShooting = false
        game.physics.world.colliders.destroy();
        //game.physics.add.collider(santa2, bullets, bulletCollisionP2);
        collider = null
        setTimeout(function () {
            revive()
        }, 2000)
        //window.alert("animation about to begin")
        santa.play("dead1", true)
        santa.setScale(0.30)
        //santa.play("santa_anim_dead", true);
        santaDied()
        santaAlive = 2
    }
    if (santaAlive == 2) {
        background.tilePositionY -= -.25
        for (var x = 0; x < rocks.length; x++) {
            moveRocks(rocks[x], -.25);
        }
    }
}


function moveRocks(rock, speed) {
    rock.y -= speed
    if (rock.y < -20) {
        p1Points++;
        if (p1Points > generatedRocks.length) {
            return true
        }
        rock.y = config.height
        rock.x = generatedRocks[rockCounter]
        rockCounter++;
    }
}
