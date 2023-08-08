// Get all the question elements
const questions = document.querySelectorAll('.question');

// Attach click event listeners to each question
questions.forEach(question => {
    question.addEventListener('click', () => {
        // Find the corresponding answer element
        const answer = question.nextElementSibling;

        // Find the icon element within the question
        const icon = question.querySelector('i[data-feather]');

        // Toggle the visibility of the answer
        if (answer.style.display === 'none') {
            answer.style.display = 'block';
            if (icon) {
                icon.setAttribute('data-feather', 'minus'); // Change icon to minus
                feather.replace();
            }
        } else {
            answer.style.display = 'none';
            if (icon) {
                icon.setAttribute('data-feather', 'plus'); // Change icon to plus
                feather.replace();
            }
        }
    });
});
