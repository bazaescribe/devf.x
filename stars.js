function generateRandomStars() {
    const starryNight = document.getElementById('starryNight');
    const numStars = 100; // Adjust this number to control the density of stars
  
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 2 + 1}s`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      starryNight.appendChild(star);
    }
  }
  
  generateRandomStars();
  