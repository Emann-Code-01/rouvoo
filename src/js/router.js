const routes = {
    "/": "/pages/home.html",
    "/about": "/pages/about.html",
    "/faq": "/pages/faq.html",
    "/contact-us": "/pages/contact-us.html",
    "/riders": "/pages/riders.html",
    "/vendors": "/pages/vendors.html",
};

function loadRoute() {
    const path = window.location.pathname;
    const route = routes[path];
    const app = document.getElementById("app");

    if (!app) return;

    if (!route) {
        app.innerHTML = "<h1>404 Page Not Found</h1>";
        return;
    }

    fetch(route)
        .then(res => res.text())
        .then(html => {
            app.innerHTML = html;
            window.scrollTo(0, 0);
        })
        .catch(() => {
            app.innerHTML = "<h1>Error loading page</h1>";
        });
}

export function initRouter() {
    // Handle browser back/forward buttons
    window.addEventListener("popstate", loadRoute);

    // Load initial route
    loadRoute();

    // Intercept all link clicks
    document.addEventListener("click", (e) => {
        const link = e.target.closest("a");
        if (link && link.href.startsWith(window.location.origin)) {
            e.preventDefault();
            const path = new URL(link.href).pathname;
            window.history.pushState(null, "", path);
            loadRoute();
        }
    });
}