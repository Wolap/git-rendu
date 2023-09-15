const spawnStar = () => {
    if (document.body.children.length > 120) {
        return;
    }

    const star = document.createElement("div");
    star.classList.add("stars");
    star.style.setProperty("--top", Math.random() * 100 + "%");
    star.style.setProperty("--left", Math.random() * 100 + "%");
    star.style.setProperty("--size", Math.random() * 4 + 1 + "px");

    const duration = Math.random() * 5 + 5;
    star.style.setProperty("--duration", duration + "s");

    document.body.append(star);

    setTimeout(() => {
        star.remove();
    }, duration * 1000);

    setTimeout(spawnStar, (duration + (Math.random() - 0.5) * 2) * 1000);
};

const count = 100;
for (let i = 0; i < count; i++) {
    spawnStar();
}
