var bar = function (game) {
    this.game = game;

    var self = this;

    this.draw = function () {
        self.game.context.drawImage(
            self.game.resource.bar.img,
            0, 100 // kích cỡ của bar  
        );
    }
}