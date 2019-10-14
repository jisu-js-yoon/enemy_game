let current_hero= 0;
function hero_whatever() {
    let hero = document.createElement('div');
    hero.className= "character_hero";
    hero.style.left = "382.5px";  // css에서 값을 받아오면 안된다. 자바스크립트에서 해야함

    document.getElementById('bg').appendChild(hero);

    let hero_position = document.getElementsByClassName('character_hero')[0];

    let current_enemy = 0;

    window.addEventListener("keydown", function (e) {
        let x_value = parseInt(hero_position.style.left);
        //if(x_value>=20 && x_value<=760) {
            if (e.keyCode === 37) {
                if (x_value < 20) {
                    hero_position.style.backgroundPosition = '-70px 0';

                }else {
                    hero_position.style.backgroundPosition = '-70px 0';
                    x_value -= 20;
                    hero_position.style.left = x_value + "px";
                    current_hero = hero_position.style.left;
                }
            }
            if (e.keyCode === 39) {
                if(x_value>750){
                    hero_position.style.backgroundPosition = '-105px 0';
                }
                else {
                    hero_position.style.backgroundPosition = '-105px 0';
                    x_value += 20;
                    hero_position.style.left = x_value + "px";
                    current_hero = hero_position.style.left;
                }
            }
        //}
    });

    window.addEventListener("keyup",function (e) {
        if(e.keyCode===37){
            hero_position.style.backgroundPosition='0';
        } if(e.keyCode===39){
            hero_position.style.backgroundPosition='0';
        }
    });


//---------------------------------------------------------------------------
// function enemy_top(){
//     let enemy = document.createElement('div');
//     enemy.className="character_enemy";
//     enemy.style.top = '0px';
//     document.getElementById('bg').appendChild(enemy);
// }
// enemy_top();
//
// let enemy_position = document.getElementsByClassName('character_enemy')[0];
//
// function enemy_moving(){
//     const bg_num = 756;
//     let rand_num = Math.floor(Math.random() * bg_num);
//     enemy_position.style.left = rand_num + "px";
//     current_enemy = enemy_position.style.left;
// }
// enemy_moving();
//
// let enemy_x_value = parseInt(enemy_position.style.top);
// let enemy_top_num = 0;
//
// function enemy_falling(){
//     enemy_x_value += 15;
//     enemy_position.style.top = enemy_x_value + "px";
//     enemy_top_num= parseInt(enemy_position.style.top);
//     //console.log(enemy_top_num);
//
//
//     if(enemy_x_value>527){
//         clearInterval(falling);
//     }
// }
//
// let falling = setInterval(init, 100);
//     let enemy_left = enemy_position.style.left;
//     let hero_left = hero_position.style.left;
//
//
//
// function dying(){
//     let enemy_left_num = parseInt(enemy_position.style.left);
//     //console.log( enemy_left_num )
//     //console.log((parseInt(current_hero) - 20))
//     if(enemy_top_num >= 530 && ((enemy_left_num -27.5 <= (parseInt(current_hero))) && (enemy_left_num + 27.5 >= (parseInt(current_hero))))){
//         enemy_position.style.backgroundPosition = '-45px 0';
//     }
// }
//
// function init(){
//     enemy_falling();
//     dying();
// }
}
hero_whatever();
