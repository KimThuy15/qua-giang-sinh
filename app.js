var boxgift = document.querySelector('.box-gift');
var Close = document.querySelector('.fa-xmark');
var boxContent = document.querySelector('.box-content');
var content =document.querySelector('.content');
var audio2 = document.getElementById("Audio2");
var audio = document.getElementById('myAudio');
var audio3 = document.getElementById('Audio3');

// Đảm bảo người dùng tương tác với trang trước khi bật âm thanh
document.body.addEventListener('click', function() {
    // var audio = document.getElementById('myAudio');
    var button = document.getElementById('playButton');
    // audio.muted = false; // Bật âm thanh
    audio.play(); // Chơi nhạc
    button.style.display = "none";
});

// Nếu bạn muốn phát nhạc ngay khi tải trang (mặc dù có thể cần người dùng tương tác trước)
// window.onload = function() {
//     var audio = document.getElementById('myAudio');
//     audio.muted = true;  // Bật âm thanh im lặng để tránh lỗi
//     audio.play();  // Thử phát nhạc ngay khi trang tải
// };
boxgift.onclick = function(){
    boxgift.classList.toggle('active')
    boxContent.classList.add('active')
    boxgift.classList.add('active')
    // // Dừng nhạc hiện tại (audio)
    // if (!audio.paused) {
    //     audio.pause();  // Dừng nhạc audio
    //     // audio.currentTime = 0;  // Đưa về đầu bài nhạc
    //     console.log("audio da dung");
    // }

    // Kiểm tra xem audio có đang phát không, nếu có thì dừng nó
//     if (!audio.paused) {
//         console.log("Audio đang phát, dừng audio");
//         audio.pause();  // Dừng nhạc audio
//         audio.currentTime = 0;  // Đưa về đầu bài nhạc
//     } else {
//         console.log("Audio hiện tại đã dừng hoặc chưa phát");
//     }

//    // Phát nhạc mới (audio2)
//    if (audio2.paused) {
//     audio2.play();  // Phát nhạc audio2
//     console.log("Audio2 đang phát");
// } else {
//     audio2.pause();  // Nếu audio2 đang phát, dừng nó
//     audio2.currentTime = 0;  // Đưa về đầu bài nhạc
//     console.log("Audio2 đã dừng");
// }
    // // Chơi nhạc mới (audio2)
    // audio2.play();  // Phát nhạc audio2
    // console.log("audio2 da phat");

    // audio.pause();
    // audio2.play();

};
boxContent.onclick = function(){
//     // Kiểm tra xem audio có đang phát không, nếu có thì dừng nó
//     if (!audio.paused) {
//         console.log("Audio đang phát, dừng audio");
//         audio.pause();  // Dừng nhạc audio
//         audio.currentTime = 0;  // Đưa về đầu bài nhạc
//     } else {
//         console.log("Audio hiện tại đã dừng hoặc chưa phát");
//     }

//    // Phát nhạc mới (audio2)
//    if (audio2.paused) {
//     audio2.play();  // Phát nhạc audio2
//     console.log("Audio2 đang phát");
// } else {
//     audio2.pause();  // Nếu audio2 đang phát, dừng nó
//     audio2.currentTime = 0;  // Đưa về đầu bài nhạc
//     console.log("Audio2 đã dừng");
// }

audio.pause();
// audio.currentTime = 0;
audio.src="Slient night.mp3";
// audio.play();
audio2.play();
}
content.onclick = function(){
    boxContent.classList.add('active')
};

Close.onclick = function(){
    boxContent.classList.remove('active')
    audio2.pause();
    audio2.src = "MerryChristmas.mp3";
    audio3.play();
    boxgift.classList.remove('active')



    

};


