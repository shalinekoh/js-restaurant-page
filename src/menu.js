export function loadMenu() {
    content = document.getElementById("content");
    content.innerHTML = "";

    const headline = document.createElement("h1");
    headline.innerHTML = "Our Menu";
    content.appendChild(headline);

    const menuItems = [
        { name: "Spaghetti Carbonara", description: "Classic Italian pasta with creamy sauce and pancetta." },
        { name: "Margherita Pizza", description: "Fresh mozzarella, basil, and tomato sauce on a crispy crust." },
        { name: "Caesar Salad", description: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan." }
    ]

    menuItems.forEach(item => {
        const menuItem = document.createElement("div");
        const itemName = document.createElement("h1");
        itemName.textContent = item.name;
        menuItem.appendChild(itemName);

        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.description;
        menuItem.appendChild(itemDescription);

        content.appendChild(menuItem);
    })
}
