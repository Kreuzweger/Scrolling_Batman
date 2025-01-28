// Select video element
const vid = document.getElementById('v0');

// Preload the video completely before playing
vid.onloadeddata = () => {
    console.log('Video preloaded successfully');
};

// Pause video on load
vid.pause();

// Update scrollable height on resize
let scrollableHeight = document.getElementById('set-height').offsetHeight;
window.onresize = () => {
    scrollableHeight = document.getElementById('set-height').offsetHeight;
};

// Update video based on scroll position
window.onscroll = () => {
    const scrollFraction = Math.min(window.pageYOffset / (scrollableHeight - window.innerHeight), 1);
    vid.currentTime = scrollFraction * vid.duration;
    vid.pause();
};

// Fade out the black screen on page load
window.onload = function () {
    const blackScreen = document.getElementById('black-screen');

    // Wait for a brief moment before starting the fade-out
    setTimeout(() => {
        blackScreen.style.opacity = '0'; // Fade the black screen out

        // Wait for the fade-out animation to complete
        setTimeout(() => {
            blackScreen.style.display = 'none'; // Hide the black screen completely
        }, 1000); // This should match the duration of the fade-out
    }, 900); // Wait for 0.9 seconds before starting the fade-out (similar to the first page)
};

gsap.registerPlugin(ScrollTrigger);

gsap.to(".logo", {
  scrub: 4,
  rotation: 720,
  ease: "none",
  scrollTrigger: {
    trigger: ".spacer",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    markers: false,
    pin: true
  }
});

let scrollTimeout;

window.onscroll = () => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
  scrollTimeout = setTimeout(() => {
    const scrollFraction = Math.min(window.pageYOffset / (scrollableHeight - window.innerHeight), 1);
    vid.currentTime = scrollFraction * vid.duration;
    vid.pause();
  }, 20); // Aktualisiert nur alle 20ms
};
