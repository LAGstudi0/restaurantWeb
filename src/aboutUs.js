import Map from './map.png';

function aboutUs() {
    const element = document.createElement('div');
    element.classList.add('about-container');
    element.setAttribute('id', 'about-container');
    // div for the phone and location text
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');

    // phone text
    const phoneNumber = document.createElement('span');
    phoneNumber.innerHTML = '☎ 123 456 789';
    infoContainer.appendChild(phoneNumber);


    // location text
    const locationAddress = document.createElement('span');
    locationAddress.innerHTML = '📍 -456 12 39';
    infoContainer.appendChild(locationAddress);

    element.appendChild(infoContainer);

    // Address of the location.
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    const map = new Image();
    map.src = Map;
    imageContainer.appendChild(map);
    element.appendChild(imageContainer);


    return element;
}

export default aboutUs;