function showAbout() {
    const aboutSection = document.getElementById('about-section');
    aboutSection.classList.toggle('hidden');
  }

function showHome() {
// Hide all sections
document.getElementById('about-section').classList.add('hidden');
document.getElementById('contact-section').classList.add('hidden');

// Show home content (header is already visible, no extra action needed)
console.log('Home content is already displayed.');
}

function showContact() {
// Hide all sections
document.getElementById('about-section').classList.add('hidden');

// Show contact section
const contactSection = document.getElementById('contact-section');
contactSection.classList.remove('hidden');
}


