const routes = {
    "/": "./pages/home.html",
    "/about": "./pages/about.html",
    "/faq": "./pages/faq.html",
    "/contact": "./pages/contact.html",
    "/rider": "./pages/rider.html",
    "/vendor": "./pages/vendor.html",
};

function loadRoute(appElement) {
    const hash = window.location.hash.replace("#", "") || "/";
    const route = routes[hash];

    if (!route) {
        appElement.innerHTML = "<h1>404 Page Not Found</h1>";
        return;
    }

    fetch(route)
        .then(res => res.text())
        .then(html => {
            appElement.innerHTML = html;
        })
        .catch(err => {
            console.error("Error loading route:", err);
            appElement.innerHTML = "<h1>Error loading page</h1>";
        });
}

export function initRouter(appElement) {
    // Load initial route
    loadRoute(appElement);

    // Listen for hash changes
    window.addEventListener("hashchange", () => loadRoute(appElement));
}