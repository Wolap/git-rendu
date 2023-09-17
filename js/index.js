document.querySelectorAll("[x-href]").forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = el.getAttribute("x-href");
    });
});
