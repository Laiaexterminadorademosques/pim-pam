controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f 2 2 f . . . . . . . 
        . . . . f 2 2 2 2 f . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f 2 1 f . . . . . . . 
        . . . . . f 1 2 f . . . . . . . 
        . . . . . f 2 2 f . . . . . . . 
        . . . . . f 2 1 f . . . . . . . 
        . . . . . f 1 2 f . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -50)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    ASTEROIDE.destroy()
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
let ASTEROIDE: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
game.splash("\"BENVINGUTS A LA SELVA\"", "APRETA A PER COMENÇAR")
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . f d f d d f d e e f f . . . . 
    . f d f d d f d e e d d f . . . 
    f d e e d d d d e e f d f . . . 
    f d d d d f d d e e f d f . . . 
    f f f f f d d e e e f f . . . . 
    . f d d d d e e e f f . . . . . 
    . . f e e e f f e e e f . . . . 
    . . f f f f f e e e e e f . f f 
    . . f d f f e e f f e e f . e f 
    . f f d d f e f f e e e f . e f 
    . f f f f f f e f f f e f f e f 
    . f d d f e e e d d f e f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
mySprite.setPosition(77, 32)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(1000, function () {
    ASTEROIDE = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f e f . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . f 5 f . . . . . . . . . 
        . . . f 5 5 f . . . . . . . . . 
        . . . f 5 5 f . . . . . . . . . 
        . . f 5 5 1 f . . . . . . . . . 
        . . f 5 5 5 1 f . . . . . . . . 
        . . f 5 5 5 5 1 f f . . . . . . 
        . . f 5 5 5 5 5 1 1 f f . . . . 
        . . . f 5 5 5 5 5 5 1 5 f f . . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . . f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 50)
    ASTEROIDE.x += randint(0, scene.screenWidth())
    ASTEROIDE.setKind(SpriteKind.Projectile)
})
