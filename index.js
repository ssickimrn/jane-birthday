document.getElementById("discoverBtn").addEventListener("click", function() {
    window.location.href = "mainpage.html"; // Redirects to newpage.html in the same tab
});
document.addEventListener("DOMContentLoaded", () => {
    function createEmoji() {
        const emojiArray = ["❤️", "💖", "💕", "💘", "😍", "💞"];
        const emoji = document.createElement("div");
        emoji.innerText = emojiArray[Math.floor(Math.random() * emojiArray.length)];
        emoji.classList.add("emoji");
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(emoji);
        setTimeout(() => { emoji.remove(); }, 5000);
    }
    setInterval(createEmoji, 500);
});