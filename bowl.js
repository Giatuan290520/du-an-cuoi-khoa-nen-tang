var bowl = function (game) {
    this.game = game;
    this.x = 0;
    this.y = 350;
    var self = this;

    this.init = function () {
        this.game.canvas.addEventListener('mousemove', function (event) { // bổ sung sự kiện theo cơ chế DOM
            self.proccessMouseMove(event);
        });
    }

    this.proccessMouseMove = function (event) { // sự kiện di chuyển chuột  
        var rect = self.game.canvas.getBoundingClientRect();
        this.x = event.clientX - rect.left - (this.game.resource.bowl.img.width / 2);
    }

    this.update = function () {

    }

    this.draw = function () { //hiển thị phần ảnh vào vị trí
        this.game.context.drawImage(
            this.game.resource.bowl.img,
            this.x,
            this.y
        );
    }
}