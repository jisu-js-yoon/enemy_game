class Enemy {
    constructor() {
        this.width = 45;
        this.height = 54;
        this.enemyCreate();
        this.interval();
    }

    // init() {
    //
    // }

    enemyCreate(){
        this.div = document.createElement('div');
        this.div.className = "character_enemy";
        this.div.style.postion="absolute";
        this.div.style.top = '0px';
        this.div.style.left = Math.floor(Math.random() * (800-this.height))+'px';
        document.getElementById('bg').appendChild(this.div);
    }

    enemyFalling(){
        this.yValue = parseInt(this.div.style.top);
        this.yValue += 26;
        this.div.style.top = this.yValue + "px";
    }

    enemyDying(){
        this.xValue = parseInt(this.div.style.left);
        //console.log(parseInt(current_hero));
        //if(this.yValue >= 530 && ((this.xValue -27.5 <= (parseInt(current_hero))) && (this.xValue + 27.5 >= (parseInt(current_hero))))){
        if(this.yValue >= 520 && ((this.xValue -35 <= (parseInt(current_hero))) && (this.xValue + 45 >= (parseInt(current_hero))))){
            this.div.style.backgroundPosition = '-45px 0';
        }
    }


    interval(){
        //setinterval(this.enemyFalling(),200);

        //es5
        // setInterval(function() {
        //     // es5 에서 function 내의 this는 window 객체를 가르키기 때문에 안된다.
        //     this.enemyFalling();
        // }, 200);


        //es6
        this.intervalId = setInterval(() => {
            //this.enemyCreate();
            this.enemyFalling();
            this.enemyDying();
            this.clearInterval();
        }, 300)


    }

    clearInterval(){
        if(this.yValue > 525) {
            //console.log(this.yValue);
            clearInterval(this.intervalId);
            setInterval(()=>{
                this.div.remove();
            },1000);
        }
    }
}

new Enemy();

setInterval(()=>{
    new Enemy();
},1200);

//enemy.init();