const draggables = document.querySelectorAll('.draggable');
const dropZones = document.querySelectorAll('.drop-zone');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

dropZones.forEach(dropZone => {
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    dropZone.addEventListener('drop', (e) => {
        const dragging = document.querySelector('.dragging');
        
        // Comprobar si el Pokémon es el correcto
        if ((dropZone.id === "pikachuZone" && dragging.id === "drag1") ||
            (dropZone.id === "bulbasaurZone" && dragging.id === "drag2") ||
            (dropZone.id === "celebiZone" && dragging.id === "drag3") ||
            (dropZone.id === "diancieZone" && dragging.id === "drag4") ||
            (dropZone.id === "lucarioZone" && dragging.id === "drag5") ||
            (dropZone.id === "rayquazaZone" && dragging.id === "drag6")) {
            dropZone.appendChild(dragging);
        }
    });
});

