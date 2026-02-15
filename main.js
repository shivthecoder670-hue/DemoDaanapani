// Smooth fade-in animation
const cards = document.querySelectorAll('.card');

// Initialize animation state
cards.forEach(card => card.classList.add('awaiting-scroll'));

const animateCards = () => {
  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      card.classList.remove('awaiting-scroll');
      card.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', animateCards);
animateCards();
// GALLERY FILTER
function filterGallery(category) {
  document.querySelectorAll('.gallery img').forEach(img => {
    img.style.display =
      category === 'all' || img.classList.contains(category)
      ? 'block'
      : 'none';
  });
}

// LIGHTBOX
function openLightbox(img) {
  document.getElementById('lightbox').style.display = 'flex';
  document.getElementById('lightbox-img').src = img.src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
function sendReservation() {
  const name = document.getElementById('res-name').value;
  const phone = document.getElementById('res-phone').value;
  const date = document.getElementById('reservation-date').value;
  const timeVal = document.getElementById('res-time-value').value;
  const timePeriod = document.getElementById('res-time-period').value;
  const time = `${timeVal} ${timePeriod}`;
  const guests = document.getElementById('guest-count').value;

  if (!name || !phone || !date || !timeVal || !guests) {
    alert('Please fill all required fields to make a reservation.');
    return;
  }

  const message = `🍽️ *Table Reservation - Daana Pani*%0A
Name: ${name}%0A
Phone: ${phone}%0A
Date: ${date}%0A
Time: ${time}%0A
Guests: ${guests}`;

  window.open(`https://wa.me/917483567640?text=${message}`, '_blank');
}
function sendEventEnquiry() {
  const name = document.getElementById('event-name').value;
  const phone = document.getElementById('event-phone').value;
  const date = document.getElementById('reservation-date').value;
  const eventType = document.getElementById('event-type').value;
  const guests = document.getElementById('guest-count').value;
  const notes = document.getElementById('event-notes').value;

  if (!name || !phone || !date || !eventType || !guests) {
    alert('Please fill all required fields for your event enquiry.');
    return;
  }

  const message = `💍 *Event Enquiry - Daana Pani*%0A
Name: ${name}%0A
Phone: ${phone}%0A
Event: ${eventType}%0A
Date: ${date}%0A
Guests: ${guests}%0A
Notes: ${notes}`;

  window.open(`https://wa.me/917483567640?text=${message}`, '_blank');
}

function sendContactEnquiry() {
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const notes = document.getElementById('contact-message').value;

  const message = `✉️ *Contact Enquiry - Daana Pani*%0A
Name: ${name}%0A
Email: ${email}%0A
Message: ${notes}`;

  window.open(`https://wa.me/917483567640?text=${message}`, '_blank');
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.navbar nav');

  if (mobileBtn && nav) {
    mobileBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nav.classList.toggle('active');
    });
  }
});