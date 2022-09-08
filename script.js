const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 9000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = (totalTime / 5);
const breatheoutTime = (totalTime / 5);

breathRelaxAnimation();

function breathRelaxAnimation() {
    text.innerText = 'breathe in';
    time.innerText = (breatheTime / 1000) + '' + 'seconds';

    setTimeout(() => {
        text.innerText = 'hold on';
        time.innerText = (holdTime / 1000) + '' + 'seconds';
        setTimeout(() => {
            text.innerText = 'breathe out';
            time.innerText = (breatheTime / 1000) + '' + 'seconds'; }, holdTime); }, breatheTime);
}

setInterval(breathRelaxAnimation, totalTime);