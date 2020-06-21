const modalOverlay = document.querySelector('.modal-overlay');
const courses = document.querySelectorAll('.course');
const modal = document.querySelector('.modal');

for(let course of courses) {
    course.addEventListener("click", function() {
        const courseId = course.getAttribute('id');
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${courseId}`;
    });
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('iframe').src = "";
    modal.classList.remove('maximize');
});

document.querySelector('.maximize-modal').addEventListener("click", function() {
    const value = modal.classList.contains('maximize');

    if(!value) {
        modal.classList.add('maximize');
    } else {
        modal.classList.remove('maximize');
    }

});