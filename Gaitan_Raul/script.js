document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("networkImg");

    box.addEventListener("click", () => {
        let input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";

        input.onchange = event => {
            const file = event.target.files[0];
            if (!file) return;

            const img = document.createElement("img");
            img.src = URL.createObjectURL(file);
            img.style.maxWidth = "100%";
            img.style.maxHeight = "100%";

            box.innerHTML = "";
            box.appendChild(img);
        };

        input.click();
    });
});
document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".resurse-container");
    const images = Array.from(container.querySelectorAll("img"));
    
    // schimbă pozițiile la fiecare 3 secunde
    setInterval(() => {
        // scoatem prima imagine și o punem la sfârșit
        const first = images.shift();
        images.push(first);

        // reordonăm în container
        container.innerHTML = "";
        images.forEach(img => container.appendChild(img));
    }, 3000);

});