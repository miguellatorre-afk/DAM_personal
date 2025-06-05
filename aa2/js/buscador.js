document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
});

function buscarBoss() {
  const query = document.getElementById('search').value.trim();

  if (!query) {
    alert("Introduce el nombre de un boss.");
    return;
  }
  window.location.href = `detalle.html?name=${encodeURIComponent(query)}`;
}
