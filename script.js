const background = document.getElementById("background");
const toggleBtn = document.getElementById("theme-toggle");
const image = document.getElementById("theme-image");
const heading = document.getElementById("theme-heading");
const text = document.getElementById("theme-text");
const content = document.getElementById("content-wrapper");

let isDay = true;

function switchTheme() {
  content.style.opacity = 0;

  setTimeout(() => {
    if (isDay) {
      background.style.backgroundImage = "url('./assets/moon.gif')";
      image.src = "./assets/moon.jpg";
      heading.innerHTML = "Chandra: The Inner Reflector 🌙";
      text.innerHTML = `
        Chandra, the Moon God, governs emotion, intuition, and rest. In Indian philosophy, he is the ruler of the mind, carrying Soma—the nectar of immortality. Associated with calmness and cycles of time, Chandra influences tides, plants, and inner reflection. His worship brings mental clarity and emotional peace.
      `;
      toggleBtn.textContent = "Switch to ☀️";
    } else {
      background.style.backgroundImage = "url('./assets/sun.gif')";
      image.src = "./assets/sun.jpg";
      heading.innerHTML = "Surya: Illuminator of Dharma ☀️";
      text.innerHTML = `
        Surya, the Sun God in Indian philosophy, is the embodiment of energy, discipline, and truth. He is the divine observer of all action (<em>Deva Chakshu</em>), guiding through time and season. His presence encourages growth, intellect, and spiritual awakening. Surya Namaskar is a daily ritual to honor his light.
      `;
      toggleBtn.textContent = "Switch to 🌙";
    }

    isDay = !isDay;
    content.style.opacity = 1;
  }, 400);
}
    
// Load sun theme first
background.style.backgroundImage = "url('./assets/sun.gif')";
toggleBtn.addEventListener("click", switchTheme);
