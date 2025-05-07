document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('intro').textContent = 'The text has been changed!';
});

document.getElementById('changeStyleBtn').addEventListener('click', function() {
    const intro = document.getElementById('intro');
    intro.style.color = 'blue';
    intro.style.fontWeight = 'bold';
    intro.style.fontSize = '20px';
});

document.getElementById('addElementBtn').addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This is a newly added paragraph!';
    document.getElementById('content').appendChild(newParagraph);
});

document.getElementById('removeElementBtn').addEventListener('click', function() {
    const intro = document.getElementById('intro');
    if (intro) {
        intro.remove();
    }
});
