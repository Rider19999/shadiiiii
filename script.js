document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.photo');
    let currentIndex = 0;

    // Function to change photo with animation
    function changePhoto() {
        const currentPhoto = photos[currentIndex];

        // Remove the active class and apply zoom out animation on current photo
        currentPhoto.classList.remove('active');
        currentPhoto.style.animation = 'zoomOut 2s ease-in-out'; // Apply zoom out animation

        // Move to the next photo
        currentIndex = (currentIndex + 1) % photos.length;
        const nextPhoto = photos[currentIndex];

        // Add the active class and apply zoom in animation on the next photo
        nextPhoto.classList.add('active');
        nextPhoto.style.animation = 'zoomIn 2s ease-in-out'; // Apply zoom in animation
    }

    // Add click event listener to each photo
    photos.forEach(photo => {
        photo.addEventListener('click', changePhoto);
    });

    // Initially set the first photo as active
    photos[0].classList.add('active');
});
