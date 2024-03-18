const pianokey =document.querySelectorAll(".piano-keys .key"),
volumeSlider=document.querySelector(".volume-slider input"),
keycheck=document.querySelector(".key-check input")

let allKeys=[],audio=new Audio("tunes/a.wav");
const playTune=(key)=>{
    audio.src=`tunes/${key}.wav`;
    audio.play();

    const clickedKey=document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");

    setTimeout(()=>{
        clickedKey.classList.remove("active");
    },150);
}

pianokey.forEach(key=>{
        allKeys.push(key.dataset.key);
        key.addEventListener("click",()=>playTune(key.dataset.key));
});

const handleVolume=(e)=>{
        audio.volume=e.target.value;
}
const showHideKeys=()=>{
        pianokey.forEach(key=>key.classList.toggle("hide"));
}
const pressedkey=(e)=>{
  if(allKeys.includes(e.key))  playTune(e.key);
}
keycheck.addEventListener("click",showHideKeys);
volumeSlider.addEventListener("input",handleVolume);
document.addEventListener("keydown",pressedkey);