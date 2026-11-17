const dialog = document.querySelector('#booking');
const serviceSelect = document.querySelector('#service-select');
const form = document.querySelector('#booking-form');
const dateInput = document.querySelector('#preferred-date');
const note = document.querySelector('#booking-note');
let previousFocus;
const contacts = {
  massage: { name: 'Yevhenii Borovyk · Masáže', phone: '+421919390744', display: '+421 919 390 744' },
  wood: { name: 'Juliana Borovyk Hilbertová · Maderoterapia', phone: '+421904008299', display: '+421 904 008 299' }
};
const today = new Date();
dateInput.min = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
function getContact() { return serviceSelect.value === 'Maderoterapia' ? contacts.wood : contacts.massage; }
function message() {
  const name = form.elements.name.value.trim();
  const date = dateInput.value ? new Date(`${dateInput.value}T12:00:00`).toLocaleDateString('sk-SK') : '';
  return `Dobrý deň, ${name ? `volám sa ${name}. ` : ''}Mám záujem o: ${serviceSelect.value}.${date ? ` Vyhovoval by mi dátum ${date}.` : ''} Prosím o informáciu o voľných termínoch, trvaní a cene. Ďakujem.`;
}
function updateBooking() {
  const contact = getContact();
  document.querySelector('#booking-person-name').textContent = contact.name;
  const call = document.querySelector('#booking-call');
  call.href = `tel:${contact.phone}`;
  call.textContent = `${contact.display} ↗`;
  document.querySelector('#booking-email').href = `mailto:recepcia@4hb.eu?subject=${encodeURIComponent(`Záujem o termín — ${serviceSelect.value}`)}&body=${encodeURIComponent(message())}`;
}
document.querySelectorAll('[data-book]').forEach(button => {
  button.addEventListener('click', () => {
    previousFocus = button;
    if (button.dataset.book) serviceSelect.value = button.dataset.book;
    note.textContent = 'Otvorí sa vaša aplikácia na správy. Rezervácia je platná až po potvrdení salónom.';
    updateBooking();
    dialog.showModal();
    document.body.classList.add('modal-open');
    serviceSelect.focus();
  });
});
function closeBooking() { dialog.close(); }
document.querySelector('.dialog-close').addEventListener('click', closeBooking);
dialog.addEventListener('click', e => { if (e.target === dialog) { const r=dialog.getBoundingClientRect(); if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom) closeBooking(); } });
dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); previousFocus?.focus(); });
form.addEventListener('input', updateBooking);
form.addEventListener('change', updateBooking);
form.addEventListener('submit', e => {
  e.preventDefault();
  updateBooking();
  const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const smsURL = `sms:${getContact().phone}${isiOS ? '&' : '?'}body=${encodeURIComponent(message())}`;
  note.textContent = 'SMS je pripravená vo vašej aplikácii na správy. Ak sa neotvorila, zavolajte nám alebo použite e-mail. Termín potvrdí salón.';
  window.location.href = smsURL;
});
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
function closeMenu() { menuToggle.setAttribute('aria-expanded','false'); menuToggle.setAttribute('aria-label','Otvoriť menu'); nav.classList.remove('open'); }
menuToggle.addEventListener('click', () => { const open=menuToggle.getAttribute('aria-expanded')!=='true'; menuToggle.setAttribute('aria-expanded',String(open)); menuToggle.setAttribute('aria-label',open?'Zavrieť menu':'Otvoriť menu'); nav.classList.toggle('open',open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click',closeMenu));
document.addEventListener('keydown', e => { if(e.key==='Escape') closeMenu(); });
document.querySelectorAll('.service').forEach(item => item.addEventListener('toggle', () => { if(item.open) document.querySelectorAll('.service').forEach(other => { if(other!==item) other.open=false; }); }));
document.querySelector('#year').textContent = new Date().getFullYear();
updateBooking();
