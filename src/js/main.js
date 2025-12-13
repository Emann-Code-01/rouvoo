import "../css/style.css";

import NavbarController from "./components/navbar";
import { initRouter } from "./router";

document.addEventListener("DOMContentLoaded", () => {
    const navbar = new NavbarController();
    navbar.init();

    initRouter();
});
