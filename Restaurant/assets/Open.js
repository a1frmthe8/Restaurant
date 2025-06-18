// Add before </body> (and also to other pages if you want)
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header .container');
  if (header) {
    const now = new Date();
    const hour = now.getHours();
    // Example: open from 11:00 to 22:00
    const open = hour >= 11 && hour < 22;
    const status = document.createElement('span');
    status.textContent = open ? 'Open Now' : 'Closed';
    status.style.marginLeft = '1.5rem';
    status.style.padding = '0.3em 1em';
    status.style.borderRadius = '1em';
    status.style.fontWeight = '600';
    status.style.fontSize = '1rem';
    status.style.background = open ? '#2d6a4f' : '#ccc';
    status.style.color = '#fff';
    status.style.verticalAlign = 'middle';
    status.style.marginTop = '0.3em';
    header.appendChild(status);
  }
});
