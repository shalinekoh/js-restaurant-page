
import Logo from "./logo.png";

export function loadHomePage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const headline = document.createElement("h1");
    headline.innerHTML = "Welcome to Our Restaurant!";
    content.appendChild(headline);

    const image = document.createElement("img");
    image.src = Logo;
    content.appendChild(image);

    const description = document.createElement('p');
    description.textContent = "Our restaurant offers the finest cuisine with fresh ingredients and a delightful ambiance. Come and experience the best dining experience!";
    content.appendChild(description);

    description.style.color = "white";
}
