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
    background: "gray",
    repeat: -1,
    yoyo: true,
  });
});




//  Sun ups and downs
  gsap.to(".header-right-top-middle", {
    y: -20, // Move up by 20 pixels
    repeat: -1, // Repeat infinitely
    yoyo: true, // Yoyo back and forth
    duration: 2, // Animation duration
    ease: "power1.inOut", // Easing function
  });



  document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".list li", {
      duration: 1, // Duration of each animation
      opacity: 0, // Start from opacity 0
      y: -20, // Move up by 20 pixels
      ease: "power4.out", // Easing function
      stagger: 0.5, // Delay between each animation
      repeat: -1, // Repeat indefinitely
      yoyo: true, // Yoyo back and forth for continuous effect
    });


  });


    document.addEventListener("DOMContentLoaded", function () {
      gsap.to(".banner-top", {
        duration: 5, // Duration of each rotation cycle
        rotation: 360, // Rotate by 360 degrees (one full rotation)
        repeat: -1, // Repeat indefinitely
        ease: "linear", // Linear easing for continuous rotation
      });
    });


      document.addEventListener("DOMContentLoaded", function () {
    gsap.from("h1 span", {
      duration: 1, // Animation duration per letter
      opacity: 0, // Start from opacity 0
      y: -20, // Move up by 20 pixels
      ease: "power4.out", // Easing function
      stagger: 0.1 // Stagger the animation of each letter by 0.1 seconds
    });
  });