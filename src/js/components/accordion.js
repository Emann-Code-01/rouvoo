 document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-header');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function () {
            const accordion = this.closest('.accordion');

            const content = accordion.querySelector('.accordion-content');

            const isActive = this.classList.contains('active');

            accordionButtons.forEach(otherButton => {
                if (otherButton !== this) {
                    otherButton.classList.remove('active');
                    const otherContent = otherButton.closest('.accordion').querySelector('.accordion-content');
                    otherContent.classList.remove('active');
                }
            });

            if (isActive) {
                this.classList.remove('active');
                content.classList.remove('active');
            } else {
                this.classList.add('active');
                content.classList.add('active');
            }
        });

        button.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});