namespace SpriteKind {
    export const Bomb = SpriteKind.create()
}
function setUpEnemies (num: number, row: number, _type: number) {
    numEnemies = num
    if (num > 8) {
        numEnemies = 8
    }
    if (_type == 0) {
        for (let index = 0; index <= numEnemies - 1; index++) {
            pos = numEnemies * row + index
            EnemyList[pos] = sprites.create(img`
                . . . . . . 7 . 7 . . . . . . . 
                . . . . . . 7 . 7 . . . . . . . 
                . . . 7 7 2 2 7 2 2 7 7 . . . . 
                . . . . 7 2 2 7 2 2 7 . . . . . 
                . . . . . 7 7 7 7 7 . . . . . . 
                . . . . 7 5 5 7 5 5 7 . . . . . 
                . . 7 7 7 5 5 5 5 5 7 7 7 . . . 
                7 7 7 7 7 5 5 5 5 5 7 7 7 7 7 . 
                . 7 7 7 7 5 5 5 5 5 7 7 7 7 . . 
                . 7 2 7 7 . 2 . 2 . 7 7 2 7 . . 
                7 7 2 7 . . 2 . 2 . . 7 2 7 7 . 
                7 2 7 7 . . . . . . . 7 7 2 7 . 
                7 2 2 7 . . . . . . . 7 2 2 7 . 
                7 2 2 7 . . . . . . . 7 2 2 7 . 
                7 7 7 7 . . . . . . . 7 7 7 7 . 
                . 7 7 . . . . . . . . . 7 7 . . 
                `, SpriteKind.Enemy)
            EnemyList[pos].setPosition(scene.screenWidth() / (numEnemies + 1) * (index + 1), 20 * (1 + row))
            EnemyList[pos].setVelocity(2, 0)
            EnemyList[pos].setFlag(SpriteFlag.StayInScreen, true)
        }
    } else if (_type == 1) {
        for (let index2 = 0; index2 <= numEnemies - 1; index2++) {
            pos = numEnemies * row + index2
            EnemyList[pos] = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . 8 8 . . . 5 . . . 8 8 . . . . 
                . . 8 8 5 2 5 2 5 8 8 . . . . . 
                . . . 8 2 2 5 2 2 8 . . . . . . 
                . . . . 5 5 5 5 5 . . . . . . . 
                . . . . 8 5 5 5 8 . . . . . . . 
                . . 8 8 8 2 2 2 8 8 8 . . . . . 
                . 8 8 8 . 2 2 2 . 8 8 8 . . . . 
                8 8 8 8 . 5 5 5 . 8 8 8 8 . . . 
                8 8 8 . . 2 2 2 . 8 8 8 8 . . . 
                8 8 8 . . . 2 . . 8 8 8 8 . . . 
                `, SpriteKind.Enemy)
            EnemyList[pos].setPosition(scene.screenWidth() / (numEnemies + 1) * (index2 + 1), 20 * (1 + row))
            EnemyList[pos].setVelocity(2, 0)
            EnemyList[pos].setFlag(SpriteFlag.StayInScreen, true)
        }
    } else if (_type == 2) {
        for (let index3 = 0; index3 <= numEnemies - 1; index3++) {
            pos = numEnemies * row + index3
            EnemyList[pos] = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . d d d d d . . . . . . 
                . . . . . d . . . d . . . . . . 
                . . . . d d . . . d d . . . . . 
                . . . . d . . . . . d . . . . . 
                . . . . d . . 1 . . d . . . . . 
                . . . . d . 1 . 1 . d . . . . . 
                . d . . d 1 . . . 1 d . . d . . 
                . 6 6 6 d 1 . . . 1 d 6 6 6 . . 
                . d . . d . 1 1 1 . d . . d . . 
                . 6 6 6 6 . . . . . 6 6 6 6 . . 
                . . . . d . . . . . d . . . . . 
                . . . . d . . . . . d . . . . . 
                . . . . d d d d d d d . . . . . 
                . . . . . 2 . . . 2 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            EnemyList[pos].setPosition(scene.screenWidth() / (numEnemies + 1) * (index3 + 1), 20 * (1 + row))
            EnemyList[pos].setVelocity(2, 0)
            EnemyList[pos].setFlag(SpriteFlag.StayInScreen, true)
        }
    } else {
        for (let index4 = 0; index4 <= numEnemies - 1; index4++) {
            pos = numEnemies * row + index4
            EnemyList[pos] = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 2 . . 8 . 8 . . . . 2 . . . 
                2 2 2 . . 8 . 8 . . 2 2 2 . . . 
                2 2 2 . 3 2 3 2 3 . 2 2 2 . . . 
                2 2 2 . 3 3 3 3 3 . 2 2 2 . . . 
                . 2 2 2 2 3 3 3 2 2 2 2 . . . . 
                . . 2 2 2 8 8 8 2 2 2 . . . . . 
                . 2 2 2 2 8 8 8 2 2 2 2 . . . . 
                2 2 2 2 . 3 3 3 2 2 2 2 2 . . . 
                . 2 2 2 . 8 8 8 . 2 2 2 . . . . 
                . . . 2 . . . . . 2 . . . . . . 
                `, SpriteKind.Enemy)
            EnemyList[pos].setPosition(scene.screenWidth() / (numEnemies + 1) * (index4 + 1), 20 * (1 + row))
            EnemyList[pos].setVelocity(2, 0)
            EnemyList[pos].setFlag(SpriteFlag.StayInScreen, true)
        }
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("num enemies: " + EnemyList.length)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (numMissiles > 0) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . . 2 . . . . . . . 
            . . . . . . . . 2 . . . . . . . 
            . . . . . . . . 2 . . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 5 2 . . . . . . 
            `, ship, 0, -60)
        numMissiles += -1
    }
})
sprites.onOverlap(SpriteKind.Bomb, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
})
info.onLifeZero(function () {
    game.over(false)
})
function setupScene (num: number) {
    if (num == 0) {
        setUpEnemies(3, 0, 0)
        setUpEnemies(3, 1, 0)
        setUpEnemies(3, 2, 0)
    } else if (num == 1) {
        setUpEnemies(4, 0, 0)
        setUpEnemies(4, 1, 1)
        setUpEnemies(4, 2, 0)
    } else if (num == 2) {
        setUpEnemies(5, 0, 0)
        setUpEnemies(5, 1, 1)
        setUpEnemies(5, 2, 2)
        gameUpdateTime = 1500
    } else if (num == 3) {
        setUpEnemies(6, 0, 0)
        setUpEnemies(6, 1, 1)
        setUpEnemies(6, 2, 2)
        setUpEnemies(6, 3, 3)
    } else {
        setUpEnemies(7, 0, 1)
        setUpEnemies(7, 1, 3)
        setUpEnemies(7, 2, 2)
        setUpEnemies(7, 3, 0)
        gameUpdateTime = 1000
    }
}
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(-1)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    mySprite2 = EnemyList.removeAt(EnemyList.indexOf(sprite))
    if (EnemyList.length == 0) {
        sceneNumber += 1
        if (sceneNumber == 5) {
            game.over(true, effects.confetti)
        }
        sprite_list = sprites.allOfKind(SpriteKind.Bomb)
        game.splash("Level Complete!!")
        for (let value of sprite_list) {
            value.destroy()
        }
        sprite_list = sprites.allOfKind(SpriteKind.Projectile)
        for (let value2 of sprite_list) {
            value2.destroy()
        }
        setupScene(sceneNumber)
        levelComplete = 1
        changeRow = 0
        changeVelocity = 0
    }
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    numMissiles += 1
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    info.changeLifeBy(-1)
    bomb.destroy()
    if (info.life() != 0) {
        ship = sprites.create(img`
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . 2 . . 1 1 1 . . 2 . . . . 
            . . . 2 . . 1 1 1 . . 2 . . . . 
            . . . 1 . 1 1 1 1 1 . 1 . . . . 
            2 . . 1 8 1 1 2 1 1 8 1 . . 2 . 
            2 . . 8 1 1 2 2 2 1 1 8 . . 2 . 
            1 . . 1 1 1 2 . 2 1 1 1 . . 1 . 
            1 . 1 1 1 1 1 1 1 1 1 1 1 . 1 . 
            1 1 1 1 1 2 1 1 1 2 1 1 1 1 1 . 
            1 1 1 . 2 2 1 1 1 2 2 . 1 1 1 . 
            1 1 . . 2 2 . 1 . 2 2 . . 1 1 . 
            1 . . . . . . 1 . . . . . . 1 . 
            `, SpriteKind.Player)
        ship.setPosition(80, 112)
        controller.moveSprite(ship, 100, 0)
        ship.setFlag(SpriteFlag.StayInScreen, true)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    sprite.destroy()
    info.changeScoreBy(10)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.fountain, 500)
    game.over(false)
})
let randomDude = 0
let bomb: Sprite = null
let sprite_list: Sprite[] = []
let mySprite2: Sprite = null
let projectile2: Sprite = null
let EnemyList: Sprite[] = []
let pos = 0
let numEnemies = 0
let gameUpdateTime = 0
let changeVelocity = 0
let levelComplete = 0
let changeRow = 0
let numMissiles = 0
let sceneNumber = 0
let ship: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffffffffffffffffeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe4fffffff4efffffe44effffffffffffffffe44efffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44fffffff44fffffe44fffffffffffffffffe44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44efffffe44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe44efffff444efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe444fffff444efff4444fffe4efe444effff4444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe444efffe444efff4444fffe44444444efff4444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444efffe4444ffffe44fffe44efffe44efffe44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44e44fff44e44ffffe44fffe44fffff44efffe44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe44f44efe44f44efffe44fffe44fffff44efffe44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe44fe4efe4ef44efffe44fffe44fffff44efffe44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe4eff44f44efe4efffe44fffe44fffff44efffe44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44effe4e44ffe44fffe44fffe44fffff44efffe44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44effe444effe44fffe44fffe44fffff44efffe44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe44efff444ffff44effe44fffe44fffff44efffe44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe44ffffe44ffff44effe44fffe44fffff44efffe44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe44ffffe4effffe4effe44fffe44fffff44efffe44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe4efffff4fffffe44ffe44fffe44fffff44efffe44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeee22222222eeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeee2222444444444444444444444422eeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeee224444444447bbb77777777777777774444442eeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee2244444477bbbb7777777777777777777bbb7777444442eeffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffee22444477bbbbbbb777444444444444444444777777b77777444eeefffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffee24444477bb77b7444444444222222222222224444444447bbbbbbbee42eeffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffee24444477bbb77444444222eeeeeeeeeeeeeeeeeeeeeee222444447bbbb77444eeffffffffffffffffffffeeee222eefffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffee244447bb77bb444422eeeeeeeffffffffffffffffffffffffeeee2244bbb7777744eefffffffffffffffee2444444444effffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffee24447bb777744442eeefffee222effffffffffffffffffffffffffffeebbe44477777444efffffffffffee444777bb77742efffffffffffff
    ffffffffffffffffffffffffffffffffffeeeffffffee244477bb774444eeefffffee44444effffffffffffffffffffffffffffcbbceee24447b7744eeffffffee4447777b77b7bb42ffffffffffffff
    ffffffffffffffffffffffffffffffeee224422eeee24447bb7744442eeffffffe24447774efffffffffffffffffffffffffffcbdcfffffee4444bb744eeffee44477bb74444bb774effffffffffffff
    ffffffffffffffffffffffffffffee244444444442444777774444eefffffffee444777774effffffffffffffffffffffffffcbdcfffffffffee44477744ee44477777444244bbb74effffffffffffff
    ffffffffffffffffffffffffffe224447bb7bb774447bbb74444eefffffffee4447b777774efffffffffffffffffffffffffcbdbffffffffffffee4447bb444777b7442eee47b774efffffffffffffff
    ffffffffffffffffffffffffe22447777b7777bbb7bb774444eefffffffee244447b777774effffffffffffffffffffffffcb1bfffffffffffffffeee44777b77b744eefe247b742efffffffffffffff
    ffffffffffffffffffffffee24477bb7b77447b77b774444eefffffffffe22222247777774efffffffffffffffffffffffcb1dcffffffffffffffffffee447b7b742efffe477b44effffffffffffffff
    fffffffffffffffffffffe24477bbb7444444777b77444eeffffffffffffeeeeee47777774effffffffffffffffffffffcb1dcfffffffffffffffffffffe4447bb4efffe44b774efffffffffffffffff
    ffffffffffffffffffffe244777b74442224477b74442efffffffffffffffffffe47777774effffffffffffffccfffffcb1dcffffffffffffffffffffffffe447b74eee247b74effffffffffffffffff
    fffffffffffffffffffe2447b774422eee247bb7444eeffffffffffffffffffffe47777774effffffffffffffcbcfcffb11bffffffffffffffffffffffffffee44b744247b742effffffffffffffffff
    ffffffffffffffffffe2477777442eeffe2477444eeffffffffffffffffffffffe47b77774effffffffffffffcdbcbcb11bfffffffffffffffffffffffffffffe4477b4bbb44efffffffffffffffffff
    fffffffffffffffffe2477bb742eeffffe247444eefffeeefffffffffffffffffe4bb77774efffffffffffffffbdbdb11dcffffffffffffffffffffffffffffffee447bb744effffffffffffffffffff
    ffffffffffffffffe247777742effffffe44442efffee22efffffffffffffffff24b777774efffffffffffffffcdd111dcccffffffffffffffeeeefffffffffffffe44bb74efffffffffffffffffffff
    fffffffffffffffe247777742efffffff24442efee2242effffffffffffffffff24b777774efffffffffffccccbd1111dbcfffffffffffffee222ffffffffffffff247b74effffffffffffffffffffff
    ffffffffffffffe247777742efffffffe244eeee24444efffffffee22eeffffff24b777774effffffffffcbbddd11111dbbccfffffffeee24442efffffffffffffe44b74efffffffffffffffffffffff
    fffffffffffffe244777744effffffffe22eee2444442efffeee2244442eeffff247777774efffffffeeee44eecd111ddbbbcffffeee2444442effffffffffffee247b42efffffffffffffffffffffff
    fffffffffffffe24b7b7742effffffffe22224477744effee22444777744effff247777774effffeee244477eccb111bcfffffee22444777442ffffffffffee2244777442effffffffffffffffffffff
    ffffffffffffe247b7b744effffffffe22244777bb42ee22444b77bbb7742efff247777774eeee244447777b77bdbbbbfffee2444477b777442effffffee22444477bbb742efffffffffffffffffffff
    ffffffffffff244b777b42efffffffe22447b77b7442444477777bbbbb7742fff24777777422444477bb77777bbbeecbcfe24447bbbbb777774efffee2244447777bb7bb74efffffffffffffffffffff
    fffffffffffe24bb77774efffffffffee24777777444447bb7777777b77742efe247b7777444477bb7bbb777bcbb4ecbce2477b777777bb7b74eee22444477bb7bb77777742effffffffffffffffffff
    fffffffffff2477777742efffffffffffe247bb74444444444777777777742efe24b77777444444477777bbbccbb4efce247b77bbbb77b77774ee224444477bb777777b7742effffffffffffffffffff
    ffffffffffe24777b7742effffffffffff247b7b442ee22244b77777777742efe24b7777742e222244b7777bbbbb4effe2477b7b77747777bb4eeee2222444477777777b742effffffffffffffffffff
    ffffffffff24bb7bb7b42fffffffffffff247b77742ff2444777bb77777742efe2477bbbb4efe2244777bb7777774effe47777774444b77b774efffffee22447bbb77bbb742effffffffffffffffffff
    fffffffffe24777b7774effffffffffffe2477bb742ee2477b7bbb77777b42efe24bbb7bb4efe247bb7bb77777b74eff2477777442247777744effffffe24477b77777bb742effffffffffffffffffff
    fffffffff24766666674efffffffffffe2476666674ee4466666b447666742efe2466666b4efe4766667447666674efe24766642ee246666742ffffffe24766667447666642effffffffffffffffffff
    ffffffffe24c66666674effffffffffe244666666c42e4e6666e4446666c42ffe2466666b4efe4b666742476666e4efe24666c4244476666e4effffffe246666b444e666642efffeeeefffffffffffff
    ffffffffe246666666742ffffffffe224ec66666664424e666c4e246666c42ee24466666b4ef24c66644e476666e4efe47666c4447c666c742effffffe24666644247666642efee222efffffffffffff
    ffffffff24e6666666c422eeeeee224476666666667424c66674e476666c422244466666b4ee24666642e47666642e224e6666cc6666cb442efffffffe4e66664ee47666642e22422effffffffffffff
    fffffffe24c66666666742222222447c666666666664446666742476666c444444466666b4ee4466664244c6666422444c666666666b442eeffffffff247666c4224c66664224442efffffffffffffff
    fffffffe24c666666666e44444447c6666666666666e4466667444c6666c444e44e66666b4ee4b666c444e66666444444c66666666c422effffffffff24c666e444766666444442effffffffffffffff
    fffffffe24666666666666cc7cc6666666666666666e446666c7c6666666cc7424e6666674e24766667e6666666c7ce446666ce476742eeeeeffffffe24c666c77c6666667ee44efffffffffffffffff
    fffffffe246666666666666666666666666666666c744b666666666666666b4224e6666674e24c666666666666666b444cb74444e64222222222eeffe24666666666666666c442efffffffffffffffff
    fffffffe24666666666666666666666666666666e4444766666666666666742ee4e66666e4e24c666666666666667422444422446c444444444442efe2466666666666666c442effffffffffffffffff
    fffffffe24c66666666666666666c6666666667442224c6666666c77666742efe4e6666e42e2466666666c76666742e2222e224b66cecccccccb444e24766666666c7b666442efffffffffffffffffff
    fffffffe247666666666666666c77666666ce4422eee4c66666674446c442effe47666744ee24666666ce44c66742effeeff244e7eeee66666666e4424e666666c744e66742effffffffffffffffffff
    ffffffffe4466666666666666b44b6666c74422eeffe47c66c744424e442efff24e6c442efe24c66c7e4424ec442effffffe244444444476666666c4444c666c74424ec742efffffffffffffffffffff
    ffffffffe244c666666666674424c66ce4422eeffffe24444444eee4442effff244e442efff24444444eee44442effffffe2222ee224444e666666674244444442ee24442effffffffffffffffffffff
    fffffffffe244ec6666cce4442246c74422effffffffee222eeeffe22eefffffe24422effffe2222eeefffe22eefffffffeeeeffe2444224c666666c42224422eeffe222efffffffffffffffffffffff
    ffffffffffe2444444444422e24474422efffffffffffffffffffffefffffffffe22effffffffeeffffffffeeffffffffffffffe24442e247666666c42eeeeeffffffeeeffffffffffffffffffffffff
    fffffffffffee222222222eee244422eefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe244e42ee24666666c42ffffffffffffffffffffffffffffffffffffff
    fffffffffffffeeeeeeeefffe2222eeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe244c44ee244666666b42ffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffe22eefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe244c742e244c66666644effffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe244c6442244c666666c42effffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe244c674244b6666666c44efffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe244c6c444476666666c442efffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe244c66744766666666c442effffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe247c6667ec66666666c442efffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe24c66666666666666c442effffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff24766666666666667442efffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff247666666666666e442effffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff24766666666666e42eefffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe47666666666c442efffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe47666666667442effffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe47666666c4422efffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe47666667442efffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe44666c442eeffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe4e6ce442effffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe4474422efffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff244422efffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222efffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22eeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
pause(2000)
game.showLongText("Start Game", DialogLayout.Bottom)
scene.setBackgroundColor(15)
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
effects.starField.startScreenEffect()
ship = sprites.create(img`
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . 2 . . 1 1 1 . . 2 . . . . 
    . . . 2 . . 1 1 1 . . 2 . . . . 
    . . . 1 . 1 1 1 1 1 . 1 . . . . 
    2 . . 1 8 1 1 2 1 1 8 1 . . 2 . 
    2 . . 8 1 1 2 2 2 1 1 8 . . 2 . 
    1 . . 1 1 1 2 . 2 1 1 1 . . 1 . 
    1 . 1 1 1 1 1 1 1 1 1 1 1 . 1 . 
    1 1 1 1 1 2 1 1 1 2 1 1 1 1 1 . 
    1 1 1 . 2 2 1 1 1 2 2 . 1 1 1 . 
    1 1 . . 2 2 . 1 . 2 2 . . 1 1 . 
    1 . . . . . . 1 . . . . . . 1 . 
    `, SpriteKind.Player)
sceneNumber = 0
setupScene(sceneNumber)
ship.setPosition(80, 112)
controller.moveSprite(ship, 100, 0)
info.setLife(3)
numMissiles = 3
ship.setFlag(SpriteFlag.StayInScreen, true)
changeRow = 0
levelComplete = 0
changeVelocity = 0
gameUpdateTime = 2000
game.onUpdateInterval(gameUpdateTime, function () {
    randomDude = randint(0, EnemyList.length - 1)
    bomb = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 2 5 . . . . . . . 
        . . . . . . . 2 5 2 . . . . . . 
        . . . . . . . . 5 2 . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . 8 . . . . . . . 
        `, EnemyList[randomDude], 0, 40)
    bomb.setKind(SpriteKind.Bomb)
    changeRow += 2000
    changeVelocity += 2000
    if (changeVelocity >= 10000) {
        changeVelocity = 0
        for (let value22 of EnemyList) {
            value22.setVelocity(value22.vx * -1, 0)
        }
    }
    if (changeRow >= 20000) {
        changeRow = 0
        for (let gameUpdateTime of EnemyList) {
            gameUpdateTime.setPosition(gameUpdateTime.x, gameUpdateTime.y + 20)
        }
    }
})
