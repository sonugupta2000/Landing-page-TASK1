console.log("Welcome to Spotify");
//intilize the variables
let songIndex = 0
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar');
let song[
    {songName: "Salam-e-Ishq", filepath: "song/1.mp3" coverpath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filepath: "song/1.mp3" coverpath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filepath: "song/1.mp3" coverpath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filepath: "song/1.mp3" coverpath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filepath: "song/1.mp3" coverpath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filepath: "song/1.mp3" coverpath: "covers/1.jpg"},
]

//let audioElement = new Audio('1.mp3');
// audioElement.play()

//handle play
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play ');
        masterPlay.classList.add('fa-circle-pause');
    }

})

//listen to events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate'); 

})