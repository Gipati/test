scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . c c . . . . . . . 
    . . . . . . . c 5 c . . . . . . 
    . . . . c c c 5 5 5 c c . . . . 
    . . c c b c 5 5 5 5 c c c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . f 5 5 5 b b b b 5 5 5 c . . 
    . . f f 5 5 5 5 5 5 5 5 f . . . 
    . . f f e e b f e e e f . . . . 
    . . f f f b 1 f b b e f . . . . 
    . . . f f b b b b b b f . . . . 
    . . . e e f e e e e f . . . . . 
    . . . e b b e b b 5 f . . . . . 
    . . . e b b e 5 5 5 5 f . . . . 
    . . . . e e 5 5 5 5 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 15))
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
