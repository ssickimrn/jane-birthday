function toggleMusic() {
    const music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
function nextPage() {
    window.location.href = 'playlist.html';
}
function generateCompliment() {
    const compliments = [
        "You are the most amazing person in my life! 💖",
        "Your smile brightens up my entire world! 😊",
        "Every moment with you is a dream come true! 💕",
        "You make my heart skip a beat! ❤️",
        "I’m the luckiest person to have you! 🍀",
        "Your kindness is a gift to everyone around you! 🎁",
        "You are my sunshine on a cloudy day! ☀️",
        "You light up my life like the stars in the night sky! ✨",
        "You make every day feel special! 🎉",
        "I adore you more than words can say! 🥰",
        "You are my favorite person in the whole universe! 🌎💫",
        "You are the reason I believe in love! 💞",
        "You inspire me to be a better person! 🌟",
        "Being with you is my favorite adventure! 🌍✨",
        "You are the missing piece to my puzzle! 🧩❤️"
    ];
    document.getElementById('compliment').innerText = compliments[Math.floor(Math.random() * compliments.length)];
}
function checkAnswer(answer) {
    const correctAnswer = "11/12/2022";
    document.getElementById('quiz-result').innerText = (answer === correctAnswer) ? "Correct! 💕" : "Oops, try again!";
}