const sections = document.querySelectorAll('section');
let isScrolling = false;

// Функція для плавної прокрутки
function scrollToSection(sectionIndex) {
    if (isScrolling) return;
    isScrolling = true;

    sections[sectionIndex].scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
        isScrolling = false;
    }, 1000); // Пауза між скроллами
}

// Додаємо обробку кліку для скролла між секціями
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        event.preventDefault();
        const currentIndex = Array.from(sections).findIndex(section => section.getBoundingClientRect().top >= 0);
        if (currentIndex > 0) {
            scrollToSection(currentIndex - 1);
        }
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        const currentIndex = Array.from(sections).findIndex(section => section.getBoundingClientRect().top >= 0);
        if (currentIndex < sections.length - 1) {
            scrollToSection(currentIndex + 1);
        }
    }
});

//Скрол мишкою
document.addEventListener('wheel', (event) => {
    event.preventDefault();
    const deltaY = event.deltaY;
    if (deltaY > 0) {
        const currentIndex = Array.from(sections).findIndex(section => section.getBoundingClientRect().top >= 0);
        if (currentIndex < sections.length - 1) {
            scrollToSection(currentIndex + 1);
        }
    } else if (deltaY < 0) {
        const currentIndex = Array.from(sections).findIndex(section => section.getBoundingClientRect().top >= 0);
        if (currentIndex > 0) {
            scrollToSection(currentIndex - 1);
        }
    }
}, { passive: false });