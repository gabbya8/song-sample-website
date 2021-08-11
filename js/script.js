// // var sample1 = document.getElementById("sample-1");

// // var berryPlay = document.getElementById("berry-play");
// // var berryPause = document.getElementById("berry-pause");

// // berryPlay.addEventListener("click", function () {
// //     sample1.currentTime = 12; //play 12 secs into song
// //     sample1.play();
// // });

// // berryPause.addEventListener("click", function () {
// //     sample1.pause();
// // });

// // var song = document.getElementById("sample-1");
// // var steviePlay = document.getElementById("play2");
// // var steviePause = document.getElementById("pause2");

// // steviePlay.addEventListener("click", function () {
// //     // song.load();
// //     song.play();
// // });

// // steviePause.addEventListener("click", function () {
// //     song.pause();
// // });

// $(document).ready(function () {
//     var audioElement = document.createElement("audio");
//     audioElement.setAttribute(
//         "src",
//         "http://www.soundjay.com/misc/sounds/bell-ringing-01.mp3"
//     );

//     audioElement.addEventListener(
//         "ended",
//         function () {
//             this.play();
//         },
//         false
//     );

//     audioElement.addEventListener("canplay", function () {
//         $("#length").text("Duration:" + audioElement.duration + " seconds");
//         $("#source").text("Source:" + audioElement.src);
//         $("#status").text("Status: Ready to play").css("color", "green");
//     });

//     audioElement.addEventListener("timeupdate", function () {
//         $("#currentTime").text("Current second:" + audioElement.currentTime);
//     });

//     $("#play").click(function () {
//         audioElement.play();
//         $("#status").text("Status: Playing");
//     });

//     $("#pause").click(function () {
//         audioElement.pause();
//         $("#status").text("Status: Paused");
//     });

//     $("#restart").click(function () {
//         audioElement.currentTime = 0;
//     });
// });