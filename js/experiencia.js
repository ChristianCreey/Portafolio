document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        // Remover clases activas
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
        document.querySelectorAll('.content-item').forEach(c => c.classList.remove('active'));
        
        // Activar elemento seleccionado
        this.classList.add('active');
        const target = this.dataset.target;
        document.getElementById(target).classList.add('active');
    })
});