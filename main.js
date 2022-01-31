const img = document.querySelector('img')

function isPlay(){
    img.style.animationPlayState = 'running'
}

function isPause(){
    img.style.animationPlayState = 'paused'
}