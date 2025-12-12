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

    if (!route) {
        document.getElementById("app").innerHTML = "<h1>404 Page Not Found</h1>";
        return;
    }

    fetch(route)
        .then(res => {
            if (!res.ok) throw new Error(`Failed to load ${route}`);
            return res.text();
        })
        .then(html => {
            document.getElementById("app").innerHTML = html;

            // Scroll to top on navigation
            window.scrollTo(0, 0);
        })
        .catch(err => {
            console.error("Route loading error:", err);
            document.getElementById("app").innerHTML = "<h1>Error loading page</h1>";
        });
}

window.addEventListener("hashchange", loadRoute);
window.addEventListener("load", loadRoute);
