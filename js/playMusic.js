const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
var vid = document.getElementById("myVideo");
let audio1 = new Audio();
audio1.src = "../audio/dark_cavern_ambient_001.ogg"

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}
function fadeInJavaFun() {
    
}

//Play Button
button1.addEventListener('click', function(){
    console.log('click');
    //audio1.play();
    playVid();
    audio1.addEventListener('playing' , function(){
        console.log('Audio 1 started playing!');
    })
    audio1.addEventListener('ended', function(){
        console.log('Audio 1 has ended!')
    })
})

//Pause Button
button2.addEventListener('click', function(){
    console.log('click');
    pauseVid();
    audio1.addEventListener('ended', function(){
        console.log('Vid 1 has ended!')
    })
})