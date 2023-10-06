function navBar() {
    //main navBar container
    const element = document.createElement('div');
    element.classList.add('container');

    //div for the nav
    const navContainer = document.createElement('div');
    navContainer.classList.add('navContainer');
    element.appendChild(navContainer);


    //Content where the title appears
    const title = document.createElement('div');
    title.classList.add('title');
    navContainer.appendChild(title)

    //title
    const titleText = document.createElement('h1')
    titleText.innerHTML = 'THE VILLAGE'
    title.appendChild(titleText);

    //content where navigation menu appears
    const navButton = document.createElement('div')
    navButton.classList.add('navButton');
    navContainer.appendChild(navButton);

    // Button for the nav
    const homeBtn = document.createElement('button');
    homeBtn.innerHTML = 'HOME';
    homeBtn.classList.add('home-btn');
    homeBtn.setAttribute('id', 'home-btn');
    navButton.appendChild(homeBtn);

    const shopBtn = document.createElement('button');
    shopBtn.innerHTML = 'SHOP';
    shopBtn.classList.add('shot-btn');
    shopBtn.setAttribute('id', 'shop-btn');
    navButton.appendChild(shopBtn);

    const aboutBtn = document.createElement('button');
    aboutBtn.innerHTML = 'ABOUT US';
    aboutBtn.classList.add('about-btn');
    aboutBtn.setAttribute('id', 'about-btn');
    navButton.appendChild(aboutBtn);
    
    return element;
}
export default navBar;