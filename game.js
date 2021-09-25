var game = function () {
    this.canvas = null;
    this.context = null;
    this.resource = null;
    this.chickens = [];
    this.eggs = [];
    this.bar = null;
    this.bowl = null;
    this.resourceLoaded = false;
    this.score = 0;
    var self = this;
    this.init = function () {
        this.canvas = document.createElement('canvas');
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.context = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        this.resource = new resource(this);
        this.bar = new bar(this);
        this.resource.load();
        this.chickens = [
            new chicken(this, 50, 25),  // vị trí của 4 con gà 
            new chicken(this, 150, 25),
            new chicken(this, 250, 25),
            new chicken(this, 350, 25),
        ];
        this.bowl = new bowl(this);
        this.bowl.init();
        setInterval(self.createNewEgg, 1000);
    }
    this.start = function () {
        this.loop();
    }
    this.loop = function () {// loop cho phép có nhiều thao tác cùng lúc
        self.update();
        self.draw();
        setTimeout(self.loop, 20);
    }
    this.update = function () {// cập nhật thuộc tính
        this.updateAllEggs();
    }
    this.updateAllEggs = function () { //  cập nhật tất cả thuộc tính
        for (var i = 0; i < this.eggs.length; i++) {
            this.eggs[i].update();
        }
    }
    this.draw = function () { //vẽ khung

        self.context.fillStyle = "white";
        self.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        if (self.resourceLoaded == false) {
            self.drawLoading();
        }
        else {
            self.drawTheWorld();
        }
    }
    this.createNewEgg = function () { // tạo đối tượng mới
        if (self.resourceLoaded) {
            var newEgg = new egg(self);
            newEgg.init();
            self.eggs.push(newEgg);
        }
    }
    this.drawTheWorld = function () {
        self.drawScore();
        self.bar.draw();
        self.bowl.draw();
        self.drawAllEggs();
        self.drawAllChickens();
    }
    this.drawAllEggs = function () { // trứng

        for (var i = 0; i < this.eggs.length; i++) {
            this.eggs[i].draw();
        }
    }
    this.drawAllChickens = function () { // đếm gà với thuộc tính length
        for (var i = 0; i < this.chickens.length; i++) {
            this.chickens[i].draw();
        }
    }
    this.drawLoading = function () { // tạo màn hình load game
        self.context.fillStyle = 'black';
        self.context.font = '30px Arial';
        self.context.fillText('Loading...', 100, 100);
    }
    this.drawScore = function () { // tạo điểm ghi được
        self.context.fillStyle = 'black';
        self.context.font = '30px Arial';
        self.context.fillText('Score: ' + this.score, 150, 200);
    }

}


