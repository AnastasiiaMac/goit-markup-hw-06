document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form[name="contact-form"]');
  const openModalBtn = document.querySelector('.main-button');
  const closeModalBtn = document.querySelector('.modal-btn-close');
  const modal = document.querySelector('.modal');
  const backdrop = document.querySelector('.backdrop');
  function openModal() {
    modal.classList.add('is-open');
    backdrop.classList.add('is-open');
  }
  function closeModal() {
    modal.classList.remove('is-open');
    backdrop.classList.remove('is-open');
  }
  function validateForm() {
    const name = document.getElementById('user-name').value.trim();
    const phone = document.getElementById('user-phone').value.trim();
    const privacyChecked = document.getElementById('user-privacy').checked;

    if (name === '' || phone === '') {
      alert('Please fill in your name and phone.');
      return false;
    }
    if (!privacyChecked) {
      alert('Please accept our Privacy Policy.');
      return false;
    }

    return true;
  }
  form.addEventListener('submit', function (event) {
    if (!validateForm()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
  closeModalBtn.addEventListener('click', closeModal);
  openModalBtn.addEventListener('click', openModal);
});

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-list-item');

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
