/**
 * Created by Darek on 2015-01-18.
 */
var clamp = function (x, min, max) {
    return x < min ? min : (x > max ? max : x);
}

var Q = Quintus()
    .include(["Sprites", "Anim", "Input", "Touch", "Scenes"])
    .setup({width: 800, height: 600})
    .touch();

Q.input.touchEnabled = false;
Q.input.hasTouch = true;
Q.input.touchControls({
    controls: [
        ['left', '<'],
        ['right', '>'],
        [],
        [],
        [],
        [],
        ['fire', 'a']
    ]
});

Q.controls();

Q.Sprite.extend("Player", {
    init: function (p) {

        this._super(p, {
            asset: "airplane51.png",
            sprite: "player",
            sheet: "player",
            x: Q.el.width / 2,
            y: Q.el.height - 60,
            type: Q.SPRITE_FRIENDLY,
            speed: 10
        });
        this.add("animation");
        this.add("Gun");
        //this.play("default");
    },
    step: function (dt) {

        if (Q.inputs["left"]) {
            this.p.x -= this.p.speed;
        }
        if (Q.inputs["right"]) {
            this.p.x += this.p.speed;
        }
        this.p.x = clamp(this.p.x, 0 + (this.p.w / 2), Q.el.width - (this.p.w / 2));
    }

});


Q.Sprite.extend("Alien", {
    init: function (p) {

        this._super(p, {
            asset: "alien.png",
            sprite: "alien",
            sheet: "alien",
            x: Q.el.width / 2,
            type: Q.SPRITE_ENEMY,
            speed: 100
        });
        this.add("animation");
        this.add("BasicAI");
        this.on("hit",function(col){

           if(col.obj.p.type!=Q.SPRITE_NONE) {
               console.log(col.obj.className);
               console.log(col.obj.p.asset);
           }
            //&&(col.obj.type==Q.SPRITE_FRIENDLY)
            if(col.obj.isA("Shot") ){
                this.destroy();
                col.obj.destroy();
            }
        });
        this.p.y=this.p.h;
        //this.play("default"); 
    },
    step:function(dt){
        this.stage.collide(this);

    }
});

Q.Sprite.extend(
    "Shot", {
        init: function (p) {
            this._super(p, {
                //asset:'shot.png',
                sprite: 'shot',
                sheet: 'shot',
                speed: 200

            });
            //this.add('animation');
            // this.play('default');
        },
        step: function (dt) {
            if(this.p.type==Q.SPRITE_FRIENDLY) {
                this.p.y -= this.p.speed * dt;
            }else{
                this.p.y += this.p.speed * dt;
            }
           if(this.p.y>Q.el.height || this.p.y<0){
               this.destroy();
           }
        }

    }
);



Q.component("Gun", {
    added: function () {
        this.entity.p.shots = [];
        this.entity.p.canFire=true;
        this.entity.on('step', 'handleFiring');
    },
    extend: {
        handleFiring: function (dt) {

            var entity =this;
            for(var i=entity.p.shots.length-1;i>=0;i--){
                if(entity.p.shots[i].isDestroyed){
                    entity.p.shots.splice(i,1);
                }
            }

            if (Q.inputs['fire'] && entity.p.type==Q.SPRITE_FRIENDLY ) {
                this.fire(Q.SPRITE_FRIENDLY);
            }
        },
        fire: function (type) {
            var entity = this;
            if(!entity.p.canFire)
            return;
            var shot;
            if(type==Q.SPRITE_FRIENDLY){
             shot = Q.stage().insert(new Q.Shot({
                x: this.p.x + 60,
                y: this.p.y - 50,
                speed: 200,
                type:  Q.SPRITE_FRIENDLY
            }));
            }
            else{
                shot = Q.stage().insert(new Q.Shot({
                    x: this.p.x + 60,
                    y: this.p.y  +entity.p.h-20,
                    speed: 200,
                    type:  Q.SPRITE_ENEMY
                }));
            }
            this.p.shots.push(shot);
            entity.p.canFire=false;
            setTimeout(function(){
                entity.p.canFire=true;
            },500);
        }
    }
});

Q.component("BasicAI",{
    added:function(){
        this.entity.changeDirections();
        this.entity.on("step","move");
        this.entity.on("step","tryToFire");
        this.entity.add("Gun");
    },
    extend:{
        changeDirections:function(){
            var entity =this;
            var numberofSeconds=Math.floor((Math.random()*5)+1);
            setTimeout(function(){
                entity.p.speed=-entity.p.speed;
                entity.changeDirections();
            },numberofSeconds *1000);

        },
        move:function(dt){
           /* var entity=this;
            entity.p.x-=entity.p.speed*dt;
            if(entity.p.x>Q.el.width-(entity.p.w/2)||entity.p.x<0+(entity.p.w/2)){
                entity            .p.speed=-entity.p.speed;

            }*/
        },
        tryToFire:function(){
            var entity=this;
            var player=Q("Player").first();
            if(!player)return;
            if(player.p.x+player.p.w>entity.p.x && player.p.x-player.p.w<entity.p.w){
                this.fire(Q.SPRITE_ENEMY);
            }

        }
    }
});

Q.scene("mainLevel", function (stage) {
    Q.gravity = 0;
    stage.insert(new Q.Sprite({
            asset: "spacebackground.jpg",
            x: Q.el.width / 2,
            y: Q.el.height / 2,
            type: Q.SPRITE_NONE
        })
    );
    stage.insert(new Q.Player());
    stage.insert(new Q.Shot({x: 100, y: 100}));
    stage.insert(new Q.Alien());
});

Q.load(["spacebackground.jpg", "airplane51.png", "shot.png","alien.png", "player.json", "shot.json","alien.json"], function () {
    Q.compileSheets("shot.png", "shot.json");
    Q.compileSheets("airplane51.png", "player.json");
    Q.compileSheets("alien.png", "alien.json");
    Q.animations("player", {default: {frames: [0, 1, 2, 3, 4], rate: 1 / 4}});
    Q.animations("shot", {default: {frames: [0, 1, 2, 3, 4], rate: 1 / 4}});
    Q.animations("alien", {default: {frames: [0, 1, 2, 3, 4], rate: 1 / 4}});
    Q.stageScene("mainLevel");

    /* Q.gameLoop(function (dt) {
     Q.clear();
     background.render(Q.ctx);
     player.update(dt);
     player.render(Q.ctx);
     });*/

});