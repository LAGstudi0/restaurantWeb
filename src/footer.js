function footer() {
    // Main footer container
    const element = document.createElement('div');
    element.classList.add('footer-container');

    // text for the footer
    const footerText = document.createElement('span')
    footerText.innerHTML = 'Made by: Angelino Red';
    element.appendChild(footerText);

    return element;
}

export default footer;