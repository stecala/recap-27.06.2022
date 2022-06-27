let output = document.querySelector(".output");

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let clock;
let check = true;

let centesimi = "00";
let seconds = "00";
let minutes = "00";
let ore = "00";

output.innerHTML = `${ore} : ${minutes} : ${seconds} : ${centesimi}`;
start.addEventListener("click", function(){
    if(check){
        clock = setInterval(function(){
            centesimi = (parseFloat(centesimi) + 1);
            if(centesimi === 100){
                centesimi = 0;
                seconds++;
            }else if(seconds === 60){
                seconds = 0;
                minutes++;
            }else if(minutes === 60){
                minutes = 0;
                ore++;
            }

            output.innerHTML = `${ore} : ${minutes} : ${seconds} : ${centesimi}`;
        }, 10);
        check = false;
    }
});

stop.addEventListener("click", function(){
    clearInterval(clock);
    check = true;
});

reset.addEventListener("click", function(){
    clearInterval(clock);
    centesimi = 0;
    seconds = 0;
    minutes = 0;
    ore = 0;
    output.innerHTML = `${ore} : ${minutes} : ${seconds} : ${centesimi}`;
    check = true;
});