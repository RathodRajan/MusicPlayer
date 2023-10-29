let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');


song.onloadeddata = function(){

    console.log(song.duration);
    progress.max = song.duration;
    console.log(song.currentTime);
    progress.value = song.currentTime;

}

// song.play();

function playPause(){
    if (ctrlIcon.innerHTML == '✋' ) {
        song.pause();
        // song.play();
        ctrlIcon.innerHTML = '👍';
    } 
    else{
        
        ctrlIcon.innerHTML = '✋';
        song.play();
        // song.pause()
    }
}


if (song.play()) {
    setInterval(()=>{
        progress.value = song.currentTime
    },500)
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;

}


