var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

// Play video, update volume 
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// Pause video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow down video by 10% each time button is clicked
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * .9;
	playbackspeed = video.playbackRate;
	console.log("New speed is " + playbackspeed);
});

// Speed up video by proportional amount to slow down each time button is clicked
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * (1 / .9);
	playbackspeed = video.playbackRate;
	console.log("New speed is " + playbackspeed);
});

// Mute + unmute audio and update button 
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {
		document.querySelector("mute").innerHTML = "Unmute";
		video.muted = true;
		console.log("Muted");
	}
	else {
		video.muted = false;
		document.querySelector("mute").innerHTML = "Mute";
		console.log("Unmuted");
	}
});

// Update volume
document.querySelector("#volumeSlider").addEventListener("click", function() {
	console.log(this.value);
	document.querySelector("#volume").innerHTML = volumeSlider.value;
	let newVol = volumeSlider.value / 100;
	video.volume = newVol;
	document.querySelector("#volume").innerHTML = volumeSlider.value + "%";
});

// Skip ahead 5 seconds, restart if close to end
document.querySelector("#skip").addEventListener("click", function() {
	let time = video.currentTime; 
	if (time + 5 > video.duration) {
		video.currentTime = 0;
	}
	else { 
		video.currentTime = time + 5;
	}
});

// Add old time style 
document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldTime");
});

// Convert back to original style
document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldTime");
});
