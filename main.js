let lastScrollTop = 0;
let rotation = 0;

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Berechne die Scrollgeschwindigkeit
  let scrollSpeed = scrollTop - lastScrollTop;
  
  // Aktualisiere die Rotation basierend auf der Scrollgeschwindigkeit
  rotation += scrollSpeed * 0.5; // Passe diesen Wert für die Empfindlichkeit an

  // Wende die Rotation auf das Logo an
  document.querySelector(".logo").style.transform = `rotate(${rotation}deg)`;

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Damit es nicht negativ wird
});
