var game = function () {

var Q = Quintus({frameTimeLimit:10000}).include("Sprites").setup();

Q.Sprite.extend("Ball",{
  init:function(p) {
    this._super(p,{
      asset: "ball.png",
      x: 40, 
      y: 100,
      vx: 5,
      vy: -10
    }); 
  },

  step: function(dt) {
    this.p.vy += dt * 0.8;

    this.p.x += this.p.vx * dt;
    this.p.y += this.p.vy * dt;
  }
});

Q.load(["ball.png"],function() {
  var ball = new Q.Ball();
  var totalTime=0;
  Q.gameLoop(function(dt) {
    totalTime += dt;
    ball.update(dt);
    Q.clear();
    ball.render(Q.ctx);
    $("#timer").text(Math.round(totalTime * 1000) + " MS");
    $("#fps").text(Math.round(Q._loopFrame / totalTime) + " FPS");
  });
});

$("#pause").on('click',Q.pauseGame);
$("#unpause").on('click',Q.unpauseGame);

}