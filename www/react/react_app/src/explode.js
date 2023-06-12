const particles = document.querySelectorAll(".GridSpan");

function explode() {
  particles.forEach((particle) => {
    particle.style.setProperty(
      "--x", 
      Math.floor(Math.random() * 101)
    );
    particle.style.setProperty(
      "--y", 
      Math.floor(Math.random() * 101)
    );
  });
}