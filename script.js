const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

const buttons = document.querySelectorAll('.btn-primary');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const originalText = button.innerText;

    button.innerText = 'Added ✓';

    setTimeout(() => {
      button.innerText = originalText;
    }, 1500);
  });
});