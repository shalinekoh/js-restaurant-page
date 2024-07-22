export function loadAbout() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    // Create and append headline
    const headline = document.createElement('h1');
    headline.textContent = "About Us";
    content.appendChild(headline);

    // Create and append description text
    const description = document.createElement('p');
    description.textContent = "Our restaurant has been serving the community with love and dedication for over 20 years. We pride ourselves on offering high-quality, delicious meals made from the freshest ingredients. Our team is passionate about providing exceptional service and creating a welcoming atmosphere for all our guests.";
    content.appendChild(description);

    // Create and append team section
    const teamSection = document.createElement('div');
    const teamHeadline = document.createElement('h2');
    teamHeadline.textContent = "Our Team";
    teamSection.appendChild(teamHeadline);

    const teamDescription = document.createElement('p');
    teamDescription.textContent = "Our team is a group of talented chefs, friendly servers, and dedicated staff who work together to ensure you have a memorable dining experience.";
    teamSection.appendChild(teamDescription);

    content.appendChild(teamSection);
}
