// function timer(){
//     console.log('sec')

// }

// setInterval(timer , 1000);




// function timeOut(){
//     console.log('sec')

// }

// setTimeout(timeOut , 3000);




// var count = 0;

// function timer(){
//     count++
//     console.log(count);

// }

// setInterval(timer , 1000);




// var count = 0;
// var interval;

// function timer(){
//     count++;
//     console.log(count);

// }

// interval = setInterval(timer , 1000);

// setTimeout(() => {
//     clearInterval(interval)
// }, 5000);




// var count = 0;
// var interval;

// function timer(){
//     count++;
//     console.log(count);

// }

// interval = setInterval(timer , 1000);

// setTimeout(function(){
//     clearInterval(interval)
// }, 5000);



// var count = 0;
// var interval;

// function timer(){
//     count++;
//     console.log(count);

// }

// interval = setInterval(timer , 1000);

// function clear(clear){
//     var clear = clearInterval(interval)
//     // return clear;
// }

// setTimeout(clear, 5000)


var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var msecHeading = document.getElementById('msec');
var interval;

function timer(){
    msec++;
    msecHeading.innerHTML = msec;

    if(msec >= 100){
        sec++;
        secHeading.innerHTML = sec;
        msec = 0
    }
    else if(sec >= 60){
        min++;
        minHeading.innerHTML = min;
        sec = 0
    }

}

function disable_btn(){
    document.getElementById('str_btn').disabled = true
    
}  

function enable_btn(){
    document.getElementById('str_btn').disabled = false
}  

function start(){
    // start_btn();
    interval = setInterval(timer , 10);
    
}

function stop(){
    clearInterval(interval);
}


function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop();
}



