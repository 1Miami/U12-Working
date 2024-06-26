var game = new Phaser.Game(800, 600, Phaser.AUTO, 'container');

// A few parameters for the game
var parameters = {
	height: 200,
	width: 200,
	tile_height: 36,
	tile_width: 36,
	mines: 10,
	sprites: "img/tiles_sprites.png"
};




// The loading screen
var startState = {
	preload: function() {
		game.load.spritesheet('tiles', parameters.sprites, 36, 36);
		game.load.image('sky', 'img/sky.png');
	},

	create: function() {
		game.add.sprite(0,0,'sky');
		game.add.text(80, 80, 'Hello, welcome to the minesweeper.');
		var startLabel = game.add.text(80, 150, 'Press S to start');

		var sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);

		sKey.onDown.addOnce(this.start, this);

	},
	start: function() {
		game.state.start('game');
	}
}

// The game screen
var gameState = {

	create: function() {
		game.add.sprite(0,0,'sky');
		var board = new Board(10, 10, parameters.mines);
		board.group.x = 220;
		board.group.y = 120;

		var startLabel = game.add.text(80, 70, 'Press R to restart');
		var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
		rKey.onDown.add(startState.start, startState);

		game.add.text(200, 560, "Switch between reveal and place flag");

	},



	update: function() {
	}

}


var endState = {
	create: function() {
		game.add.sprite(0,0,'sky');
		game.add.text(80, 80, 'Hello, welcome to the minesweeper.');
		var startLabel = game.add.text(80, 150, 'Press S to start');

		var sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);

		sKey.onDown.addOnce(this.start, this);

	},

	start: function() {
		game.state.start('game');
	}
}

game.state.add("start", startState);
game.state.add("game", gameState);
game.state.start("start");
