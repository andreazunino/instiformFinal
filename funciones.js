document.addEventListener('DOMContentLoaded', function() {  //ver como acomodar para que aparezca solo
    const opciones = {
        estudiante: ["Inscribirse a curso", "Anular inscripción a curso", "Ver cursos inscriptos"],
        administrador: ["Administración de Estudiantes", "Administración de Cursos", "Administración de Inscripciones"]
    };

    function mostrarMenu(opciones) {
        const menuDiv = document.getElementById('menu');
        menuDiv.innerHTML = ''; // Limpia contenido previo

        opciones.forEach((opcion, index) => {
            const item = document.createElement('a');
            item.href = "#";
            item.className = "list-group-item list-group-item-action";
            item.textContent = `${index + 1}. ${opcion}`;
            menuDiv.appendChild(item);
        });

        menuDiv.style.display = 'block'; // Mostrar el menú
    }

    document.getElementById('btn-estudiante').addEventListener('click', function() {
        mostrarMenu(opciones.estudiante);
        $('#loginModal').modal('hide');
    });

    document.getElementById('btn-administrador').addEventListener('click', function() {
        mostrarMenu(opciones.administrador);
        $('#loginModal').modal('hide');
    });

    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('btn-estudiante').addEventListener('click', function() {
            window.location.href = 'menu_estudiante.html';
        });
    
        document.getElementById('btn-administrador').addEventListener('click', function() {
            window.location.href = 'menu_administrador.html';
        });
    });
    
});
