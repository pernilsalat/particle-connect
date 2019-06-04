function Particle() {
  const pos = createVector(random(width), random(height));
  const vel = p5.Vector.random2D();
  const CONNECT_DISTANCE = 7500;

  function edges() {
    if (pos.x > width || pos.x < 0) {
      vel.x *= -1;
    }
    if (pos.y > height || pos.y < 0) {
      vel.y *= -1;
    }
  }

  function squareDistance(pointA, pointB) {
    return (pointA.x - pointB.x) ** 2 + (pointA.y - pointB.y) ** 2;
  }

  function connectWithMouse(particles) {
    let dist = squareDistance(pos, { x: mouseX, y: mouseY });
    if (dist <= CONNECT_DISTANCE) {
      line(pos.x, pos.y, mouseX, mouseY);
      fill(0);
    } else {
      stroke(0, 40);
      particles.forEach(particle => {
        dist = squareDistance(pos, particle);
        if (dist <= CONNECT_DISTANCE) {
          line(pos.x, pos.y, particle.x, particle.y);
        }
      });
      stroke(0);
      fill(255);
    }
  }

  return {
    get x() {
      return pos.x;
    },
    get y() {
      return pos.y;
    },
    update() {
      pos.add(vel);
      edges();
    },
    show() {
      connectWithMouse(particles);
      ellipse(pos.x, pos.y, 8, 8);
    },
  };
}
