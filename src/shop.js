import Cake from './cake.png';
import Chicken from './chicken.png';
import Cod from './cooked_Cod.png';
import RabbitStew from './rabbitStew.png';
import Steak from './steak.png';
import Cookie from './cookie.png';
import Emerald from './emerald.png'

//Colors for the div that follows
// purple for the frame #1b0539
// background color #140413
// color for the title #fdfbfb
// color for subtitle #a9a7a8
// color for subpoints #5d5858
// color for stats up #584eb9

function shop() {
    const element = document.createElement('div');
    element.classList.add('shop-container');
    element.setAttribute('id', 'container-shop');

    // array with the location of the images.
    const foodArray = {
        Cake: Cake,
        Chicken: Chicken,
        Cod: Cod,
        RabbitStew: RabbitStew,
        Steak: Steak,
        Cookie: Cookie,
    };

    // array with the information of the images
    const foodInfo = [
        'Indulge in a sweet delight with our delectable, freshly baked cake.',
        'Savor the succulence of tender chicken, cooked to perfection.',
        'Dive into a delightful oceanic experience with our flavorful cod dish.',
        'Experience a hearty and comforting meal with our savory rabbit stew.',
        'Delight your taste buds with our mouthwatering steak, grilled to your preference.',
        'Indulge in a delightful treat with our freshly baked, chewy chocolate chip cookies, perfect for satisfying your sweet cravings.',
    ]

    // Array with the information on prices.
    const foodPrices = [
        80,
        40,
        33,
        69,
        40,
        12,
    ]

    // arrays that hold for when you hover through the cells.
    const foodTitle = [
        'Cake', 'Chicken', 'Cod',
        'Rabbit Stew', 'Steak', 'Cookies',
    ]

    const foodUpgrade = [
        'Sweet Delight', 'Tender Feast', 'Oceanic Flavor',
        'Hearty Comfort', 'Mouthwatering Meal', 'Chewy Treats'
    ];

    const whenOnBody = [
        '+10% Health Regeneration',
        '+15% Attack Damage',
        '+20% Swimming Speed',
        '+25% Jump Boost',
        '+30% Health Points',
        '+5% Speed',
    ]

    // Iterate through the keys of the foodArray object
    let i = 0;


    for (let food in foodArray) {
        const foodWrapper = document.createElement('div');
        foodWrapper.classList.add('food-wrapper');
        //container for the food with the image and the description.
        const foodCell = document.createElement('div');
        foodCell.classList.add('food-cell');

        const foodDescription = document.createElement('p');
        foodDescription.classList.add('food-cell-description');
        foodDescription.innerHTML = foodInfo[i];

        // create a div where we add the price
        const priceContainer = document.createElement('div');
        priceContainer.classList.add('price-container');

        const priceNumber = document.createElement('span');
        priceNumber.innerHTML = foodPrices[i];

        //emerald image
        let emerald = new Image();
        // emerald.classList('emerald-img');
        emerald.src = Emerald;

        //add price Number and emerald to price Container.
        priceContainer.appendChild(priceNumber);
        priceContainer.appendChild(emerald);

        let myIcon = new Image();
        myIcon.src = foodArray[food]; // Get the path using the key (food) from the object

        foodCell.appendChild(myIcon);
        foodCell.appendChild(foodDescription);
        foodWrapper.appendChild(foodCell);
        foodWrapper.appendChild(priceContainer)
        element.appendChild(foodWrapper);


        //Add the hover effect when cursor is on top of a cell.
        const infoDiv = document.createElement('div')
        infoDiv.setAttribute('id', 'informationContainer');

        //Give the content for the div.

        //title
        const titleHover = document.createElement('div');
        titleHover.classList.add('title-hover');
        const itemName = document.createElement('span')
        itemName.innerHTML = foodTitle[i];
        titleHover.appendChild(itemName);
        infoDiv.appendChild(titleHover);

        //upgrade Title
        const upgradeText = document.createElement('div');
        upgradeText.classList.add('upgrade-text');
        const upgradeTitle = document.createElement('span');
        upgradeTitle.innerHTML = 'Upgrade:'
        upgradeText.appendChild(upgradeTitle);
        infoDiv.appendChild(upgradeText);

        //upgrade text
        const upgradeData = document.createElement('div');
        upgradeData.classList.add('upgrade-data');
        const upData = document.createElement('span');
        upData.innerHTML = foodUpgrade[i];
        upgradeData.appendChild(upData);
        infoDiv.appendChild(upgradeData);

        //when on body title
        const whenOnBodyTitle = document.createElement('div');
        whenOnBodyTitle.classList.add('when-on-body');
        const bodyTitle = document.createElement('span');
        bodyTitle.innerHTML = 'When on Body:';
        whenOnBodyTitle.appendChild(bodyTitle);
        infoDiv.appendChild(whenOnBodyTitle);

        //when on body stats
        const whenOnBodyText = document.createElement('div');
        whenOnBodyText.classList.add('when-on-body-text');
        const statsData = document.createElement('span');
        statsData.innerHTML = whenOnBody[i];
        whenOnBodyText.appendChild(statsData);
        infoDiv.appendChild(whenOnBodyText);


        i++;



        foodCell.addEventListener('mouseenter', function() {
            // Add the infoDiv to the document body when the mouse enters the cell
            document.body.appendChild(infoDiv);
        });
        
        foodCell.addEventListener('mousemove', function(e) {
            // Calculate half of the width and height of the infoDiv
            var infoDivWidth = infoDiv.offsetWidth / -2;
            var infoDivHeight = infoDiv.offsetHeight / -2;

            // Update the position of the infoDiv based on the mouse coordinates and infoDiv dimensions
            var x = e.clientX - infoDivWidth;
            var y = e.clientY - infoDivHeight + window.scrollY; // Add scrollY only if your page can be scrolled vertically

            // Set the position of the infoDiv
            infoDiv.style.left = x + 'px';
            infoDiv.style.top = y + 'px';
        });
        
        foodCell.addEventListener('mouseleave', function() {
            // Remove the infoDiv from the document body when the mouse leaves the cell
            document.body.removeChild(infoDiv);
        });


    }


    
    return element;
}

export default shop;