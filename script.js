const videoPlayer = document.getElementById('videoPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const videoProgress = document.getElementById('videoProgress');

videoPlayer.addEventListener('timeupdate', updateProgressBar, false);

function togglePlayPause() {
    if (videoPlayer.paused || videoPlayer.ended) {
        playPauseBtn.textContent = '⏸️'; // Change button text to 'Pause'
        videoPlayer.play();
    } else {
        playPauseBtn.textContent = '▶️'; // Change button text to 'Play'
        videoPlayer.pause();
    }
}

function skip(value) {
    videoPlayer.currentTime += value;
}

function updateProgressBar() {
    const percentage = Math.floor((100 / videoPlayer.duration) * videoPlayer.currentTime);
    videoProgress.value = percentage;
    videoProgress.style.backgroundSize = `${percentage}% 100%`;
}

videoProgress.addEventListener('input', function() {
    const time = videoPlayer.duration * (videoProgress.value / 100);
    videoPlayer.currentTime = time;
});
