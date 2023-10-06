import _ from 'lodash';
import './style.css';
import navBar from './navBar';
import footer from './footer';
import shop from './shop';
import homeContent from './homeContent';
import aboutUs from './aboutUs';


document.body.appendChild(navBar());
document.body.appendChild(homeContent());
document.body.appendChild(shop());
document.body.appendChild(aboutUs());
document.body.appendChild(footer());


// Change tabs.


// As default when you open the website the shop and the about us needs to be in display: none
document.getElementById('container-shop').style.display = 'none';
document.getElementById('about-container').style.display = 'none';


// Home button
const btnHome = document.getElementById('home-btn');
btnHome.addEventListener('click', () => {
    document.getElementById("container-home").style.display = "flex";
    document.getElementById('container-shop').style.display = 'none';
    document.getElementById('about-container').style.display = 'none';


});

// Shop button
const shopBtn = document.getElementById('shop-btn');
shopBtn.addEventListener('click', () => {
    // containerHome.classList.add('container-home-not-show');
    document.getElementById("container-home").style.display = "none";
    document.getElementById('container-shop').style.display = 'grid';
    document.getElementById('about-container').style.display = 'none';

});

// About us button
const aboutBtn = document.getElementById('about-btn');
aboutBtn.addEventListener('click', () => {
    document.getElementById('about-container').style.display = 'flex';
    document.getElementById("container-home").style.display = "none";
    document.getElementById('container-shop').style.display = 'none';
});

