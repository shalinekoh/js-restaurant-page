import { loadHomePage } from "./homepage";
import { loadMenu } from "./menu";

document.addEventListener("DOMContentLoaded", () => {
    loadHomePage();

    document.getElementById("home").addEventListener("click", loadHomePage)
    document.getElementById("menu").addEventListener("click", loadMenu)
})
