const routes = {
    "": "/pages/home.html",
    "/": "/pages/home.html",
    "about": "/pages/about.html",
    "faq": "/pages/faq.html",
    "contact-us": "/pages/contact-us.html",
    "riders": "/pages/riders.html",
    "vendors": "/pages/vendors.html",
};

function loadRoute() {
    const hash = window.location.hash.replace("#", "") || "";
    const route = routes[hash];
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
    window.addEventListener("hashchange", loadRoute);
    window.addEventListener("load", loadRoute);
}
