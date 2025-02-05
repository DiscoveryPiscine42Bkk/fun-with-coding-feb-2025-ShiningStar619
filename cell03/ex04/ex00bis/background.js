function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('colorBtn');
    
    button.addEventListener('click', () => {
        document.body.style.backgroundColor = getRandomColor();
    });
});
