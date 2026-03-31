// =====================================================
// TRAVELBASE INTERACTION ENGINE
// =====================================================

(function () {
    const root = document.documentElement;

    // -----------------------------------------------------
    // CURSOR LIGHT TRACKING
    // -----------------------------------------------------
    window.addEventListener("mousemove", (e) => {
        root.style.setProperty("--cursor-x", `${e.clientX}px`);
        root.style.setProperty("--cursor-y", `${e.clientY}px`);
    });

    // -----------------------------------------------------
    // SCROLL DEPTH (PARALLAX)
    // -----------------------------------------------------
    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY;
        const offset = scrolled * -0.05;

        root.style.setProperty("--tb-scroll", `${offset}px`);
    });

    // -----------------------------------------------------
    // INJECT LIGHT LAYER (since Mintlify hides DOM)
    // -----------------------------------------------------
    const light = document.createElement("div");
    light.className = "cursor-light";
    document.body.appendChild(light);
})();