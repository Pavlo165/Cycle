// Функція, яка відслідковує зміни DOM
function observeDOM() {
    const targetNode = document.body;
  
    // Створюємо новий спостерігач за DOM-змінами
    const observer = new MutationObserver(function(mutationsList, observer) {
      for (let mutation of mutationsList) {
        // Перевіряємо, чи додано або видалено клас _watcher-view в елементі з класом line-span
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const targetElement = mutation.target;
          if (targetElement.classList.contains('line-span')) {
            if (targetElement.classList.contains('_watcher-view')) {
              // Отримуємо значення атрибуту _width і змінюємо його
              const widthValue = targetElement.getAttribute('_width');
              if (widthValue) {
                // Змінюємо ширину елементу
                targetElement.style.width = widthValue;
              }
            } else {
              // Клас _watcher-view було видалено, змінюємо ширину на 0
              targetElement.style.width = '0';
            }
          }
        }
      }
    });
  
    // Починаємо спостереження за DOM-змінами
    observer.observe(targetNode, { attributes: true, subtree: true });
  }
  
  // Викликаємо функцію, щоб розпочати спостереження
  observeDOM();