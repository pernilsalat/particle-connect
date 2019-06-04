let fr;
const MAX_PARTICLES = 70;
const particles = [];

function setup() {
  createCanvas(800, 600);
  fr = createP('');

  for (let i = 0; i < MAX_PARTICLES; i++) {
    particles.push(Particle());
  }
}


function draw() {
  background(255);

  particles.forEach(particle => {
    particle.update();
    particle.show(particles);
  });

  fr.html(floor(frameRate()));
}
