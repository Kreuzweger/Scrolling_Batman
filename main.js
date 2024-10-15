
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
