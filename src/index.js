import { loadHomePage } from "./homepage";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";

document.addEventListener("DOMContentLoaded", () => {
    loadHomePage();

    document.getElementById("home").addEventListener("click", loadHomePage)
    document.getElementById("menu").addEventListener("click", loadMenu)
    document.getElementById("about").addEventListener("click", loadAbout)

})
