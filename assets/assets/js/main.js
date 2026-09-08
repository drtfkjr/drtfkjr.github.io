document.addEventListener('DOMContentLoaded', function () {
  const dropbtn = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropbtn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }
  });

  document.addEventListener('click', function () {
    dropdownContent.style.display = 'none';
  });
});
