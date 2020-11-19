var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

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

document.querySelector("#mute").addEventListener("click", function() {
	document.getElementById("mute").innerHTML = "Unmute";
	let mute = document.querySelector("#mute").innerHTML = "Unmute";
	video.muted = true;
});

document.querySelector("#volumeSlider").addEventListener("click", function() {
	console.log(this);
	console.log(this.value);
	let vol = document.querySelector("#volume").innerHTML = this.value + "%";
});
