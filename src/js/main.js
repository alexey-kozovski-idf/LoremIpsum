document.addEventListener('DOMContentLoaded', () => {
    // Обработка range input
    const rangeInput = document.querySelector('.range__input');
    const rangeValue = document.querySelector('.range__value');
    
    if (rangeInput && rangeValue) {
        const updateRangeValue = () => {
            rangeValue.textContent = `${rangeInput.value} %`;
        };
        
        rangeInput.addEventListener('input', updateRangeValue);
        updateRangeValue();
    }
    
    // Обработка file input
    const fileInput = document.querySelector('.file__input');
    const fileButton = fileInput?.nextElementSibling;
    
    if (fileInput && fileButton) {
        fileInput.addEventListener('change', () => {
            const fileName = fileInput.files[0]?.name;
            fileButton.textContent = fileName || 'Прикрепить файл';
        });
    }
    
    // Обработка формы
    const form = document.querySelector('.form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Здесь будет логика отправки формы
            const formData = new FormData(form);
            console.log('Form data:', Object.fromEntries(formData));
            
            // Очистка формы после отправки
            form.reset();
            if (fileButton) {
                fileButton.textContent = 'Прикрепить файл';
            }
        });
    }
    
    // Плавная прокрутка для навигации
    const navLinks = document.querySelectorAll('.header__link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Burger menu functionality
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const body = document.body;

    if (burger && nav) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            nav.classList.toggle('active');
            body.classList.toggle('lock');
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('active');
                nav.classList.remove('active');
                body.classList.remove('lock');
            });
        });
    }
}); 