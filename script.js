// Toggle mobile menu
function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
}

// Open image in modal
function viewImage(src) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  modalImg.src = src;
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('open'), 10); // small delay for fade-in
}

// Close modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('open');
  setTimeout(() => modal.style.display = 'none', 300); // wait for fade-out animation
}

// Close modal when clicking outside the image
document.getElementById('modal').addEventListener('click', function(e) {
  if(e.target.id === 'modal') closeModal();
});

// Close modal when clicking the ❌ button
document.getElementById('closeModal').addEventListener('click', closeModal);

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

