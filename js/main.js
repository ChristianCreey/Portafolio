document.querySelector('.search-bar input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    const searchTerm = encodeURIComponent(this.value);
    window.location.href = `pages/busqueda.html?q=${searchTerm}`;
  }
});