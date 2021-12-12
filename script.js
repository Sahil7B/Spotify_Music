console.log("hi")


let songIndex = 0;
let audioElement = new Audio('./music/2.mp3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    
    { songName: "Chand sifarish", filePath: "./music/1.mp3.mp3", coverPath: "covers/1.jpg" },
    { songName: "Dil", filePath: "./music/2.mp3.mp3", coverPath: "covers/2.jpg" },
    { songName: "Lagjaa", filePath: "./music/3.mp3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Let me", filePath: "./music/4.mp3.mp3", coverPath: "covers/4.jpg" },
    { songName: "Tum hi ho", filePath: "./music/5.mp3.mp3", coverPath: "covers/5.jpg" },


]
songItems.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElememt.play();

//handle play
masterPlay.addEventListener('click', ()=> {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})


// listen to events
audioElement.addEventListener('timeupdate', ()=> {
    // Update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        
        songIndex= parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        
        audioElement.src = './music/5.mp3.mp3';
        

        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})


    