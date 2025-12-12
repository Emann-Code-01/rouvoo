// Navbar State Management
class NavbarController {
    constructor() {
        this.isOpen = false;
        this.mobileNav = null;
        this.closeNavbar = null;
        this.mobileNavBar = null;
        this.mobileNavBarOverlay = null;
        this.init();
    }

    init() {
        // Get DOM elements
        this.mobileNav = document.getElementById('mobileNav');
        this.closeNavbar = document.getElementById('closeNavbar');
        this.mobileNavBar = document.getElementById('mobileNavBar');
        this.mobileNavBarOverlay = document.getElementById('mobileNavBarOverlay');

        // Check if elements exist
        if (!this.mobileNav || !this.mobileNavBar) {
            console.error('Navbar elements not found');
            return;
        }

        console.log('Navbar initialized successfully');

        // Attach event listeners
        this.attachEventListeners();
    }

    attachEventListeners() {
        // Hamburger menu click - OPEN
        this.mobileNav.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Hamburger clicked');
            this.open();
        });

        // Close button click - CLOSE
        if (this.closeNavbar) {
            this.closeNavbar.addEventListener('click', (e) => {
                e.stopPropagation();
                console.log('Close button clicked');
                this.close();
            });
        }

        // Overlay click - CLOSE
        if (this.mobileNavBarOverlay) {
            this.mobileNavBarOverlay.addEventListener('click', () => {
                console.log('Overlay clicked');
                this.close();
            });
        }

        // Close when clicking on navigation links
        const navLinks = this.mobileNavBar.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.close();
            });
        });
    }

    open() {
        if (this.isOpen) return;

        this.isOpen = true;
        console.log('Opening navbar');

        // Animate navbar in
        this.mobileNavBar.classList.remove('-translate-x-full');
        this.mobileNavBar.classList.add('translate-x-0');

        // Show overlay
        if (this.mobileNavBarOverlay) {
            this.mobileNavBarOverlay.classList.remove('hidden');
        }

        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }

    close() {
        if (!this.isOpen) return;

        this.isOpen = false;
        console.log('Closing navbar');

        // Animate navbar out
        this.mobileNavBar.classList.add('-translate-x-full');
        this.mobileNavBar.classList.remove('translate-x-0');

        // Hide overlay
        if (this.mobileNavBarOverlay) {
            this.mobileNavBarOverlay.classList.add('hidden');
        }

        // Restore body scroll
        document.body.style.overflow = 'auto';
    }

    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }
}

// Initialize immediately - don't wait for DOMContentLoaded
// because script has defer attribute
new NavbarController();