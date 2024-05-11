document.addEventListener("DOMContentLoaded", function () {
  // GSAP animation
  gsap.from(".book-now", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power4.out",
  });
  gsap.from(".number", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power4.out",
    delay: 0.5,
  });

  // Continuous color effect
  gsap.to(".book-now", {
    duration: 2,
    color: "blue",
    repeat: -1,
    yoyo: true,
  });
});
