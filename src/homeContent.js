import IconVillager from './chefLogo.png';

function homeContent() {
    //main home container
    const element = document.createElement('div');
    element.classList.add('container-home');
    element.setAttribute('id', 'container-home');


    //Introduction text but first a div to contain it.
    const introTextContainer = document.createElement('div');
    introTextContainer.classList.add('text-container');
    element.appendChild(introTextContainer);

    const bestKitchen = document.createElement('h3');
    bestKitchen.innerHTML = "Best kitchen in your world";
    introTextContainer.appendChild(bestKitchen);

    const withPassion = document.createElement('h3');
    withPassion.innerHTML = 'Made with passion since 2009';
    introTextContainer.appendChild(withPassion);

    //image of the villager, but first a div to contain it\
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    element.appendChild(imageContainer);

    const myIcon = new Image();
    myIcon.classList.add('chef-image')
    myIcon.src = IconVillager;
    imageContainer.appendChild(myIcon);

    //Order online text but first div
    const orderContainer = document.createElement('div');
    orderContainer.classList.add('order-container');
    element.appendChild(orderContainer);

    const orderText = document.createElement('h3');
    orderText.classList.add('order-text');
    orderText.innerHTML = 'Order online or visit us!';
    orderContainer.appendChild(orderText);


    return element;
}

export default homeContent;