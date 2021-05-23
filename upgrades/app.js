const panels = document.querySelectorAll('.panel')

function removeActiveClassed() {
    panels.forEach(panel => panel.classList.remove('active'))
}

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClassed();
        panel.classList.add('active');
    })
})