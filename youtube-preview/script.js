const image = document.getElementById('hoverImage');
function changeImageOnHover() {
    image.src = 'hover-image.jpg';
}
function revertImage() {
    image.src = 'original-image.jpg';
}

image.addEventListener('mouseover', changeImageOnHover);
image.addEventListener('mouseout', revertImage);
