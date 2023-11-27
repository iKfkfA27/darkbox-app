// JavaScript functions to toggle modal visibility
function openModal(url) {
  var modal = document.getElementById('myModal');
  var iframe = document.getElementById('modalFrame');
  iframe.src = url;
  modal.style.display = 'flex';
}

function closeModal() {
  var modal = document.getElementById('myModal');
  var iframe = document.getElementById('modalFrame');
  iframe.src = '';
  modal.style.display = 'none';
}