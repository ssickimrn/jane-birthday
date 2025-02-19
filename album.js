document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item img, .item video");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxVideo = document.getElementById("lightbox-video");
    const closeBtn = document.querySelector(".close");

    items.forEach(item => {
        item.addEventListener("click", function () {
            lightbox.style.display = "flex";
            
            if (this.tagName === "IMG") {
                lightboxImg.src = this.src;
                lightboxImg.style.display = "block";
                lightboxVideo.style.display = "none";
            } else if (this.tagName === "VIDEO") {
                lightboxVideo.src = this.src;
                lightboxVideo.style.display = "block";
                lightboxImg.style.display = "none";
                lightboxVideo.play();
            }
        });
    });

    // Close Lightbox
    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
        lightboxVideo.pause();
    });

    // Close Lightbox on Background Click
    lightbox.addEventListener("click", function (e) {
        if (e.target !== lightboxImg && e.target !== lightboxVideo) {
            lightbox.style.display = "none";
            lightboxVideo.pause();
        }
    });

    // Falling Hearts Effect
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        document.body.appendChild(heart);

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 500);
});

document.getElementById("finish-btn").addEventListener("click", function() {
    document.getElementById("surprise-section").style.display = "flex";
    document.getElementById("love-song").play();
});