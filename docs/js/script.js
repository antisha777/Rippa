// Бургер меню
class MobileMenu {
    constructor() {
        this.burgerBtn = document.getElementById('burgerBtn');
        this.mobileMenu = document.getElementById('mobileMenu');
        this.isOpen = false;
        
        this.init();
    }
    
    init() {
        this.burgerBtn.addEventListener('click', () => this.toggleMenu());
        
        // Закрытие по клику на ссылку
        const menuLinks = this.mobileMenu.querySelectorAll('.mobile-menu__link');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
        
        // Закрытие по клику вне меню
        this.mobileMenu.addEventListener('click', (e) => {
            if (e.target === this.mobileMenu) {
                this.closeMenu();
            }
        });
        
        // Закрытие по ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeMenu();
            }
        });
    }
    
    toggleMenu() {
        if (this.isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }
    
    openMenu() {
        this.burgerBtn.classList.add('active');
        this.mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.isOpen = true;
    }
    
    closeMenu() {
        this.burgerBtn.classList.remove('active');
        this.mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
        this.isOpen = false;
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new MobileMenu();
});

// Дополнительно: плавная прокрутка для всех якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});