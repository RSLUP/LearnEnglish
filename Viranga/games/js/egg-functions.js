$(document).on('mousemove', function (e) {
    basket.css('left', e.pageX);
});

function egg_down(egg) {
    egg_current_position = parseInt(egg.css('top'));
    egg.css('top', egg_current_position + speed);
   
    // setTimeout(function () {
    //     ran_letter.text( String.fromCharCode(Math.floor(Math.random() * 26) + 97));
    // }, 800);
   
   
    // ran_letter.text( String.fromCharCode(
    //     Math.floor(Math.random() * 26) + 97
    //   ));
}

function randomLetter()
{
    ran_letter.text( String.fromCharCode(Math.floor(Math.random() * 26) + 97));
}

function check_egg_hits_floor(egg) {
    if (collision(egg, floor)) {
        show_bulls_eye(egg);
        decrement_life();
        return true;
    }
    return false;
}

function set_egg_to_initial_position(egg) {
    egg.css('top', egg_initial_position);
}

function show_bulls_eye(egg) {
    bullseye_num = egg.attr('data-bullseye');
    $('#bullseye' + bullseye_num).show();
    hide_bulls_eye(bullseye_num);
}

function hide_bulls_eye(bullseye_num) {
    setTimeout(function () {
        $('#bullseye' + bullseye_num).hide();
    }, 800);
}

function decrement_life() {
    life--;
    life_span.text(life);
}

function check_egg_hits_basket(egg) {
    if (collision(egg, basket)) {
        egg_top = parseInt(egg.css('top'));
        if (egg_top < basket_top) {
            update_score();
            return true;
        }
    }
    return false;
}
var scoreN;
function update_score() {
    score++;
    if (score % 10 === 0 && speed <= max_speed) {
        speed++;
    }
    score_span.text(score);
    final_score.text(score);
    score_1.text(score);
    scoreN = score;
}

function stop_the_game() {
    cancelAnimationFrame(anim_id);
    restart_display.slideDown();
    restart.slideDown();
    
    
    
}

function highScore() {
    

    alert('Score : ' + localStorage.getItem("hg_score")); 
    console.log('Score : ' + localStorage.getItem("hg_score")); 
}

function check_High_Score(){
    
    localStorage.setItem("default_score", scoreN)
    
    if(localStorage.getItem("default_score") > localStorage.getItem("hg_score")){
        
        localStorage.setItem("hg_score", scoreN); 
    }
}
high_score.click(function (){
    highScore();
})


restart.click(function () {
    location.reload();
});