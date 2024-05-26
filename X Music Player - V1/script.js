/* X MUSIC PLAYER | V1  */
/* Developed by KARIM */
const songsList=[{name:"Clip 1",artist:"Music N\xb01",src:"assets/mp3/music2.mp3",cover:"assets/1.png"},{name:"Clip 2",artist:"Music N\xb02",src:"assets/mp3/music1.mp3",cover:"assets/1.png"},{name:"Clip 3",artist:"Music N\xb03",src:"assets/mp3/music3.mp3",cover:"assets/1.png"}],artistName=document.querySelector(".artist"),musicName=document.querySelector(".song"),fillBar=document.querySelector(".fill-bar"),time=document.querySelector(".time"),cover=document.getElementById("cover"),playBtn=document.getElementById("play"),prevBtn=document.getElementById("prev"),nextBtn=document.getElementById("next"),prog=document.querySelector(".progress-bar");let song=new Audio,currentSong=0,playing=!1;function loadSong(e){let{name:t,artist:n,src:s,cover:r}=songsList[e];artistName.innerText=n,musicName.innerText=t,song.src=s,cover.style.backgroundImage=`url(${r})`}function updateProgress(){if(song.duration){let e=song.currentTime/song.duration*100;fillBar.style.width=`${e}%`;let t=formatTime(song.duration),n=formatTime(song.currentTime);time.innerText=`${n} - ${t}`}}function formatTime(e){let t=Math.floor(e%60);return`${Math.floor(e/60)}:${t<10?"0":""}${t}`}function togglePlayPause(){playing?song.pause():song.play(),playing=!playing,playBtn.classList.toggle("fa-pause",playing),playBtn.classList.toggle("fa-play",!playing),cover.classList.toggle("active",playing)}function nextSong(){currentSong=(currentSong+1)%songsList.length,playMusic()}function prevSong(){currentSong=(currentSong-1+songsList.length)%songsList.length,playMusic()}function playMusic(){loadSong(currentSong),song.play(),playing=!0,playBtn.classList.add("fa-pause"),playBtn.classList.remove("fa-play"),cover.classList.add("active")}function seek(e){let t=e.offsetX/prog.clientWidth*song.duration;song.currentTime=t}document.addEventListener("DOMContentLoaded",()=>{loadSong(currentSong),song.addEventListener("timeupdate",updateProgress),song.addEventListener("ended",nextSong),prevBtn.addEventListener("click",prevSong),nextBtn.addEventListener("click",nextSong),playBtn.addEventListener("click",togglePlayPause),prog.addEventListener("click",seek)});