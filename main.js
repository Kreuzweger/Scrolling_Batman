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




// gsap.fromTo(".bats img", 
//   {
//     x: '-100vw', 
//     y: '-10vh',  
//     opacity: 0   
//   },
//   {
//     x: '20vw',    
//     y: '20vh',    
//     opacity: 1,  
//     duration: 3,  
//     scrollTrigger: {
//       trigger: ".bats",
//       start: "30% top", 
//       end: "+=500",      
//       scrub: true,      
//       markers: false,   
//     },
//     onComplete: () => {  
//       gsap.to(".bats img", {
//         opacity: 0,
//         duration: 1,    
//       });
//     }
//   }
// );

window.onload = function () {
  const blackScreen = document.getElementById('black-screen');
  const content = document.getElementById('content');

  // Warten Sie 2 Sekunden, bevor Sie den Fade-Out des schwarzen Bildschirms starten
  setTimeout(() => {
    blackScreen.style.opacity = '0'; // Fade-Out des schwarzen Bildschirms

    // Warten, bis die Fade-Out Animation abgeschlossen ist
    setTimeout(() => {
      blackScreen.style.display = 'none'; // Entfernen Sie den schwarzen Bildschirm
      content.classList.add('show'); // Fügen Sie die Klasse zum Einblenden des Inhalts hinzu
    }, 1000); // entspricht der Dauer der Fade-Out-Animation
  }, 900); // 2 Sekunden warten, bevor der Fade-Out beginnt
};





// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Pin the aufzug.png image
ScrollTrigger.create({
  trigger: ".secondSection",  // Use the existing section as the trigger
  start: "+=150",        // Start when the section's top reaches the center of the viewport
  end: "+=1400",               // Pin for 300px worth of scroll (adjust as needed)
  pin: ".secondSection img",  // Pin the aufzug.png image
  pinSpacing: false,          // Prevent extra spacing after pinning
  markers: false               // Show debugging markers
});


gsap.registerPlugin(ScrollTrigger);

// Parallax-Effekt zwischen Vordergrund (Tower.png) und Hintergrund (BackgroundTower.png)
gsap.to(".wayneTower img:first-child", { // Vordergrund (Tower.png)
  y: "10%", // Bewegt sich schneller nach unten
  ease: "none", // Keine Beschleunigung für gleichmäßigen Effekt
  scrollTrigger: {
    trigger: "#firstSection", // Aktiviert innerhalb von #firstSection
    start: "top top", // Startet, wenn der obere Rand von #firstSection sichtbar wird
    end: "bottom bottom", // Endet, wenn der untere Rand von #firstSection oben ist
    scrub: true, // Synchronisiert mit Scrollen
    markers: false // Debug-Markierungen ausblenden
  }
});

gsap.to(".wayneTower img:last-child", { // Hintergrund (BackgroundTower.png)
  y: "10%", // Bewegt sich langsamer nach unten
  ease: "none",
  scrollTrigger: {
    trigger: "#firstSection",
    start: "top top",
    end: "bottom top",
    scrub: true,
    markers: false
  }
});

gsap.registerPlugin(ScrollTrigger);

// Horizontal scroll effect for batcave
gsap.to(".background", {
  x: "-68%", // Move the background fully horizontally
  ease: "power1.inOut", // Smooth easing
  scrollTrigger: {
    trigger: ".scroll-section",  // Start based on the scroll section
    start: "top top",            // Start when the section hits the top
    end: "bottom center",        // End scroll halfway through
    scrub: 5,                    // Synchronize with scroll
    pin: true,                   // Pin the section during the scroll
    pinSpacing: false,           // Prevent extra spacing
    onUpdate: (self) => {
      // Show the button when batcave is halfway through its movement
      if (self.progress >= 0.5) {
        gsap.to(".button-container", {
          opacity: 1,
          visibility: "visible",
          duration: 1.5,           // Smooth fade-in transition
        });
      }
    }
  }
});

// Button click event to navigate to the new page
document.getElementById("nextPageButton").addEventListener("click", function() {
    window.location.href = "videoPage.html";  // Change this to your desired page URL
});


var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });