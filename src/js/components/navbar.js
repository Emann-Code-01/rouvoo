export default class NavbarController {
    constructor() {
        this.isOpen = false;
    }

    init() {
        this.mobileNav = document.getElementById('mobileNav');
        this.closeNavbar = document.getElementById('closeNavbar');
        this.mobileNavBar = document.getElementById('mobileNavBar');
        this.mobileNavBarOverlay = document.getElementById('mobileNavBarOverlay');

        if (!this.mobileNav || !this.mobileNavBar) {
            console.warn('Navbar elements not found, skipping navbar init');
            return;
        }

        this.attachEventListeners();
    }

    attachEventListeners() {
        this.mobileNav.addEventListener('click', (e) => {
            e.stopPropagation();
            this.open();
        });

        this.closeNavbar?.addEventListener('click', () => this.close());

        this.mobileNavBarOverlay?.addEventListener('click', () => this.close());

        this.mobileNavBar.querySelectorAll('a')
            .forEach(link => link.addEventListener('click', () => this.close()));

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.close();
        });
    }

    open() {
        if (this.isOpen) return;
        this.isOpen = true;

        this.mobileNavBar.classList.remove('-translate-x-full');
        this.mobileNavBar.classList.add('translate-x-0');

        this.mobileNavBarOverlay?.classList.remove('hidden');
        document.body.classList.add('nav-open');
    }

    close() {
        if (!this.isOpen) return;
        this.isOpen = false;

        this.mobileNavBar.classList.add('-translate-x-full');
        this.mobileNavBar.classList.remove('translate-x-0');

        this.mobileNavBarOverlay?.classList.add('hidden');
        document.body.classList.remove('nav-open');
    }
}
