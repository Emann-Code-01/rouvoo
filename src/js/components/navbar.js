// oxlint-disable no-unused-vars
// Navbar State Management
export default class NavbarController {
    constructor() {
        this.isOpen = false;
        this.mobileNav = null;
        this.closeNavbar = null;
        this.mobileNavBar = null;
        this.mobileNavBarOverlay = null;
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
        try {
            this.mobileNavBar.style.transform = 'translateX(-100%)';
            this.mobileNavBar.style.transition = 'transform 0.3s ease-in-out';
        } catch (e) {
        }

        if (this.mobileNavBarOverlay) {
            this.mobileNavBarOverlay.style.display = this.mobileNavBarOverlay.classList.contains('hidden') ? 'none' : '';
        }

        this.attachEventListeners();
    }

    attachEventListeners() {
        this.mobileNav.addEventListener('click', (e) => {
            e.stopPropagation();
            this.open();
        });

        if (this.closeNavbar) {
            this.closeNavbar.addEventListener('click', (e) => {
                e.stopPropagation();
                this.close();
            });
        }

        if (this.mobileNavBarOverlay) {
            this.mobileNavBarOverlay.addEventListener('click', () => {
                this.close();
            });
        }

        const navLinks = this.mobileNavBar.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => this.close());
        });
        // Close nav when pressing Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.close();
        });
    }

    open() {
        if (this.isOpen) return;

        this.isOpen = true;
        this.mobileNavBar.classList.remove('-translate-x-full');
        this.mobileNavBar.classList.add('translate-x-0');

        try {
            this.mobileNavBar.style.transform = 'translateX(0)';
        } catch (e) { }

        if (this.mobileNavBarOverlay) {
            this.mobileNavBarOverlay.classList.remove('hidden');
            this.mobileNavBarOverlay.style.display = '';
        }

        document.documentElement.classList.add('nav-open');
        document.body.classList.add('nav-open');
    }

    close() {
        if (!this.isOpen) return;

        this.isOpen = false;
        this.mobileNavBar.classList.add('-translate-x-full');
        this.mobileNavBar.classList.remove('translate-x-0');

        try {
            this.mobileNavBar.style.transform = 'translateX(-100%)';
        } catch (e) { }

        if (this.mobileNavBarOverlay) {
            this.mobileNavBarOverlay.classList.add('hidden');
            this.mobileNavBarOverlay.style.display = 'none';
        }

        document.documentElement.classList.remove('nav-open');
        document.body.classList.remove('nav-open');
    }
}
