
gsap.registerPlugin(ScrollTrigger);

gsap.to(".logo", {
  scrub:4,
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

window.onload = function() {
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
