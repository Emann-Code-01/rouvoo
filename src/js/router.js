const routes = {
    "/": "/pages/home.html",
    "about": "/pages/about.html",
    "faq": "/pages/faq.html",
    "contact-us": "/pages/contact-us.html",
    "riders": "/pages/riders.html",
    "vendors": "/pages/vendors.html",
};

let currentRequestId = 0;

function loadRoute() {
    const requestId = ++currentRequestId;

    const basePath = "/";
    const path = window.location.pathname.replace(basePath, "") || "/";
    const route = routes[path];
    const app = document.getElementById("app");

    if (!app) return;

    if (!route) {
        app.innerHTML = "<h1>404 Page Not Found</h1>";
        return;
    }

    app.innerHTML = "<p class='loading'>Loading...</p>";

    fetch(route)
        .then(res => res.text())
        .then(html => {
            if (requestId !== currentRequestId) return;
            app.innerHTML = html;
            window.scrollTo(0, 0);
        })
        .catch(() => {
            if (requestId !== currentRequestId) return;
            app.innerHTML = "<h1>Error loading page</h1>";
        });
}

export function initRouter() {
    window.addEventListener("popstate", loadRoute);

    loadRoute();

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
