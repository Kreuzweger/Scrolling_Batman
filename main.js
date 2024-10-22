
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

// gsap.fromTo(".Bats img", 
//   {
//     x: '-100vw',  
//     y: '-50vh',  
//     opacity: 0   
//   },
//   {
//     scrub: 4,
//     x: '20vw',  
//     y: '40vh',
//     opacity: 1,  
//     duration: 500, 
//     scrollTrigger: {
//       trigger: ".Bats",
//       start: "top", 
//       end: "+600", 
//       scrub: true, 
//       markers: true, 
//     },
//     onComplete: () => { 
//       gsap.to(".Bats img", {
//         opacity: 0,
//         duration: 1,  
//       });
//     }
//   }
// );

gsap.fromTo(".bats img", 
  {
    x: '-100vw', 
    y: '-10vh',  
    opacity: 0   
  },
  {
    x: '20vw',    
    y: '20vh',    
    opacity: 1,  
    duration: 3,  
    scrollTrigger: {
      trigger: ".bats",
      start: "30% top", 
      end: "+=500",      
      scrub: true,      
      markers: false,   
    },
    onComplete: () => {  
      gsap.to(".bats img", {
        opacity: 0,
        duration: 1,    
      });
    }
  }
);