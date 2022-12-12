// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002030303030303030303030303030304050a0a0a0a0a0a0a010a0a0a0a0a0a0905010101010a0a0a010a0a010a0a0a09050a0a0a010a0a0a010a0a010a0a0a09050a0a0a010101010a0a0a010a0a0a09050a0a0a0a0a0a0a0a0a0a0101010a0905010101010a0a0a010a0a0a0a0a0a09050a0a0a010a0a0a010a010a0a0a0a09050a0a0a0a010a0a010a0a0101010a09050a010a0a0a0a0a010a0a010a010a09050a010a0a0a0a010a0a0a010a010a09050a010a0a010a0a0a0a0a010a010a09050a0101010101010a0a01010a0a0a09050a010a0a0a0a0a0a0a0a0a0a0a0a09050a010a0a0a0a0a01010101010a0a0906070707070707070707070707070708`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . 2 . . . . . . 2 
2 2 2 2 2 . . . 2 . . 2 . . . 2 
2 . . . 2 . . . 2 . . 2 . . . 2 
2 . . . 2 2 2 2 . . . 2 . . . 2 
2 . . . . . . . . . . 2 2 2 . 2 
2 2 2 2 2 . . . 2 . . . . . . 2 
2 . . . 2 . . . 2 . 2 . . . . 2 
2 . . . . 2 . . 2 . . 2 2 2 . 2 
2 . 2 . . . . . 2 . . 2 . 2 . 2 
2 . 2 . . . . 2 . . . 2 . 2 . 2 
2 . 2 . . 2 . . . . . 2 . 2 . 2 
2 . 2 2 2 2 2 2 . . 2 2 . . . 2 
2 . 2 . . . . . . . . . . . . 2 
2 . 2 . . . . . 2 2 2 2 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.swamp.swampTile9], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100002020202010202020102020101010101020202020202020201020202020202020101010101020102010201010101020302020202020201020102010202010101020101010202010201020102020202020201020102020102010201020102020202010201020201010102010201020202020102010202020202020102010101010201020101010101020201020202020102010202020202010202020202020201020102020101010102020202020202010201020201020202020202020202020102010202010202020202010201020201020102020101010101010102010202010201020202020202020201010102020102010202010101010202020202020201`, img`
. . . . 2 . . . 2 . . 2 2 2 2 2 
. . . . . . . . 2 . . . . . . . 
2 2 2 2 2 . 2 . 2 . 2 2 2 2 . . 
. . . . . . 2 . 2 . 2 . . 2 2 2 
. 2 2 2 . . 2 . 2 . 2 . . . . . 
. 2 . 2 . . 2 . 2 . 2 . 2 . . . 
. 2 . 2 . . 2 2 2 . 2 . 2 . . . 
. 2 . 2 . . . . . . 2 . 2 2 2 2 
. 2 . 2 2 2 2 2 . . 2 . . . . 2 
. 2 . . . . . 2 . . . . . . . 2 
. 2 . . 2 2 2 2 . . . . . . . 2 
. 2 . . 2 . . . . . . . . . . 2 
. 2 . . 2 . . . . . 2 . 2 . . 2 
. 2 . . 2 2 2 2 2 2 2 . 2 . . 2 
. 2 . . . . . . . . 2 2 2 . . 2 
. 2 . . 2 2 2 2 . . . . . . . 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.tilePath5,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
