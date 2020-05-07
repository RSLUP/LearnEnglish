$(function(){
    var anim_id;

    var container = $('#container');
    var car = $('#car');
    var car_1 = $('#car_1');
    var car_2 = $('#car_2');
    var car_3 = $('#car_3');
    var car_4 = $('#car_4');
    var line_1 = $('#line_1');
    var line_2 = $('#line_2');
    var line_3 = $('#line_3');
    var restart_div = $('#restart_div');
    var restart = $('#restart');
    var score = $('score');

    var container_left = parseInt(container.css('left'));
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var car_width = parseInt(car.width());
    var car_height = parseInt(car.height());

    var game_over = false;
    var score_counter = 1;

    var car_speed = 2;
    var line_speed = 5;

    var move_right = false;
    var move_left = false;
    var move_up = false;
    var move_down = false;

    // GAME STARTS 

    $(document).on('keydown',function(e){
        if(game_over === false){
            var key = e.keyCode;
            if(key === 37 && move_left === false){
                move_left = requestAnimationFrame(left);
            }else if(key === 39 && move_right === false){
                move_right = requestAnimationFrame(right);
            }else if(key === 38 && move_up === false){
                move_up = requestAnimationFrame(up);
            }else if(key === 40 && move_down === false){
                move_up = requestAnimationFrame(down);
            }
        }
    });

    $(document).on('keyup',function(e){
        if(game_over === false){
            var key = e.keyCode;
            if(key === 37){
                cancelAnimationFrame(move_left);
                move_left = false;
            }else if(key === 39){
                cancelAnimationFrame(move_right);
                move_right = false;
            }else if(key === 38){
                cancelAnimationFrame(move_up);
                move_up = false;
            }else if(key === 40){
                cancelAnimationFrame(move_down);
                move_down = false;
            }
        }
    });

    function left(){
        if(game_over === false && parseInt(car.css('left')) >0){
            car.css('left',parseInt(car.css('left')) -5);
            move_left = requestAnimationFrame(left);
        }
    }
    function right(){
        if(game_over === false && parseInt(car.css('left')) < container_width - car_width){
            car.css('left',parseInt(car.css('left')) +5);
            move_right = requestAnimationFrame(right);
        }
    }
    function up(){
        if(game_over === false && parseInt(car.css('top')) >0){
            car.css('top',parseInt(car.css('top')) -5);
            move_up = requestAnimationFrame(up);
        }
    }
    function down(){
        if(game_over === false && parseInt(car.css('top')) < container_height - car_height){
            car.css('top',parseInt(car.css('top')) +5);
            move_down = requestAnimationFrame(down);
        }
    }

    anim_id = requestAnimationFrame(repeat);

    function repeat(){
        if(game_over === false){

            if(collision(car, car_1) ||collision(car, car_2) ||collision(car, car_3) ||collision(car, car_4)){
                stop_game();
            }

            score_counter++;

            if(score_counter % 20 == 0){
                score.text(parseInt(score.text()) + 1);
            }
            if(score_counter %1000 == 0){
                car_speed++;
                line_speed++;
            }


            car_down(car_1);
            car_down(car_2);
            car_down(car_3);
            car_down(car_4);

            line_down(line_1);
            line_down(line_2);
            line_down(line_3);

            anim_id = requestAnimationFrame(repeat);
        }
    }

    function car_down(car){
        var car_current_top = parseInt(car.css('top'));
        if(car_current_top > container_height){
            car_current_top = -200;
            var car_left = parseInt(Math.random() * (container_width - car_width));
            car.css('left',car_left);
        }
        car.css('top',car_current_top + car_speed);
    }

    function line_down(line){
        var line_current_top = parseInt(line.css('top')); 
        if(line_current_top > container_height){
            line_current_top = -300;
        }
        line.css('top', line_current_top + line_speed);
    }

    function stop_game(){
        game_over = true;
        cancelAnimationFrame(anim_id);
        cancelAnimationFrame(move_left);
        cancelAnimationFrame(move_right);
        cancelAnimationFrame(move_up);
        cancelAnimationFrame(move_down);
        restart_div.slideDown();
        restart.focuse();
    }

    restart.click(function(){
        location.reload();
    });


    //  GAME ENDS
    function collision($div1, $div2){
         
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;

        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if(b1 < y2 ||y1 > b2 ||r1 < x2 ||x1 > r2) return false;
        return true;
    }

});