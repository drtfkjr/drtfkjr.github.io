document.addEventListener('DOMContentLoaded', function () {
  const dropbtn = document.querySelector('.dropbtn');
  const dropdown = document.querySelector('.dropdown');

  dropbtn.addEventListener('click', function (e) {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  document.addEventListener('click', function (e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
});
