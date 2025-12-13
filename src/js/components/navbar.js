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
    }

    open() {
        if (this.isOpen) return;

        this.isOpen = true;
        this.mobileNavBar.classList.remove('-translate-x-full');
        this.mobileNavBar.classList.add('translate-x-0');

        if (this.mobileNavBarOverlay) {
            this.mobileNavBarOverlay.classList.remove('hidden');
        }

        document.body.style.overflow = 'hidden';
    }

    close() {
        if (!this.isOpen) return;

        this.isOpen = false;
        this.mobileNavBar.classList.add('-translate-x-full');
        this.mobileNavBar.classList.remove('translate-x-0');

        if (this.mobileNavBarOverlay) {
            this.mobileNavBarOverlay.classList.add('hidden');
        }

        document.body.style.overflow = 'auto';
    }
}
