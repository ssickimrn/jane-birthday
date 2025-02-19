// Create Lightbox Functionality
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".item img");
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    const imgElement = document.createElement("img");
    lightbox.appendChild(imgElement);

    const closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
    lightbox.appendChild(closeBtn);

    // Open Lightbox on Image Click
    images.forEach(img => {
        img.addEventListener("click", function () {
            lightbox.style.display = "flex";
            imgElement.src = this.src;
        });
    });

    // Close Lightbox on Click
    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Close Lightbox on Background Click
    lightbox.addEventListener("click", function (e) {
        if (e.target !== imgElement) {
            lightbox.style.display = "none";
        }
    });
});
