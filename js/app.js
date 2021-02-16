const config = {
    width: 400,
    height: 400,
    parent: 'container',
    type: Phaser.AUTO, // CANVAS, AUTO, WEBGL 
    scene: {
        preload,
        create,
        update
    }
}

const game = new Phaser.Game(config);

function preload() {
    console.log('soy preload');
}

function create() {

}

function update(time, delta) {

}