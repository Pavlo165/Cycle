function animateCounter(targetElement, finalValue, duration) {
    const initialValue = 0;
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;

        if (elapsedTime < duration) {
            const progress = (elapsedTime / duration);
            const currentValue = Math.floor(progress * (finalValue - initialValue) + initialValue);

            targetElement.textContent = currentValue;
            requestAnimationFrame(updateCounter);
        } else {
            targetElement.textContent = finalValue;
        }
    }

    requestAnimationFrame(updateCounter);
}

const observer = new MutationObserver(function (mutationsList) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const targetElement = mutation.target;
            if (targetElement.classList.contains('_watcher-view')) {
                const finalValue = parseInt(targetElement.textContent);
                animateCounter(targetElement, finalValue, 2000); // 100 - цільове значення, 2000 - тривалість анімації (у мілісекундах)
            }
        }
    }
});

const elementsWithCounter = document.querySelectorAll('.counter');

elementsWithCounter.forEach(function (element) {
    observer.observe(element, { attributes: true });
});