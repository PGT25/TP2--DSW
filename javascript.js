const productosDestacados = document.getElementById('productos-destacados');

function cargarModelos(marca) {
    modelosContainer.innerHTML = '';

    if (modelos[marca]) {
        modelos[marca].forEach(modelo => {
            // ... (crear el HTML del modelo) ...
        });
    }

    // Abre el modal después de cargar los modelos
    $('#modalModelos').modal('show');
}