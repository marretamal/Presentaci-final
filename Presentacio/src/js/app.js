// Añadir animación al título para que aparezca desde arriba
const headerTitle = document.querySelector('header h1');
headerTitle.style.position = 'relative';
headerTitle.style.opacity = '0';
headerTitle.style.transform = 'translateY(-50px)';

window.addEventListener('load', () => {
    setTimeout(() => {
        headerTitle.style.transition = 'opacity 1s ease, transform 1s ease';
        headerTitle.style.opacity = '1';
        headerTitle.style.transform = 'translateY(0)';
    }, 500); // Retraso de 500ms para la animación
});


function showAbout() {
  const aboutSection = document.getElementById('about-section');
  aboutSection.classList.toggle('hidden');
}
