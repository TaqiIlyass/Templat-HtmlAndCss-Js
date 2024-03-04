// Select Landing Page Element
let LandingPage = document.querySelector(".landing-page");

// Get Array Of Image
let ImgsArray = ["01.jpg", "02.jpg", "03.jpg", "05.jpg"];

// Get About And Span
//  معه مباشرة forEach يعيد عنصر واحد فقط لذا لا يمكن استخدام (querySelector)
let About = document.querySelector('.active');
//  تقوم بإرجاع مصفوفة  (querySelectorAll)
let Span = document.querySelectorAll('.introdection-text .span');
// TEST
// console.log(Span)
// console.log(About)

// Change Color Text
function changeColor(randomNumber) {
    const colors = ["#009688", "#FF9800", "#03A9F4", "#f4034c"];

    Span.forEach((span) => {
        span.style.color = "";
    });

    About.style.color = "";

    if (randomNumber >= 0 && randomNumber < colors.length) {
        Span.forEach((span) => {
            span.style.color = colors[randomNumber];
        });
        About.style.color = colors[randomNumber];
    }
}

// Change Background And Color
function changeBackgroundAndColor() {
    let randomNumber = Math.floor(Math.random() * ImgsArray.length);
    LandingPage.style.backgroundImage = 'url("../images/' + ImgsArray[randomNumber] + '")';
    changeColor(randomNumber);
}

changeBackgroundAndColor();

setInterval(changeBackgroundAndColor, 3000);

;

window.onscroll = () => {

    // Window ScrollTop
    let windowScrollTop = this.scrollY
    // this.console.log(windowScrollTop) === 600

    // Select Button
    let btn = document.getElementById('btn');

    if (windowScrollTop > 600) {

        let allSkills = document.querySelectorAll('.skill-box .skill-progress span');

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;
        })

        btn.style.cssText = "display: Block;"

    } else {

        btn.style.cssText = "display: None;"
    }

}

// Button Top Smooth
btn.onclick = () => {
    scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}

// Create Popup With The Image
let ourGallery = document.querySelectorAll('.gallery img');

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {

        // Create Overlay Element
        let overlay = document.createElement('div');

        // Add Class To Overlay
        overlay.className = 'popup-overlay';

        // Append Overlay To The Body
        document.body.appendChild(overlay);

        // Create The Popup Box
        let popupBox = document.createElement('div');

        // Add Class To The Popup Box
        popupBox.className = 'popup-box';

        if (img.alt !== null) {

            // Create Heading
            let imgHeading = document.createElement('h3');

            // Create Text For Heading
            let imgText = document.createTextNode(img.alt)

            // Append The Text To The Heading
            imgHeading.appendChild(imgText);

            // Append The Heading To The Popup Box
            popupBox.appendChild(imgHeading)

        }

        // Create The Image
        let popupImage = document.createElement('img');

        // Set Image Source
        popupImage.src = img.src

        // Add Image To Popup Box
        popupBox.appendChild(popupImage);

        // Append The Popup Box To Body
        document.body.appendChild(popupBox);

        // Create The Close Span
        let closeButton = document.createElement('span');

        // Create The Close Button Text
        let closeButtonText = document.createTextNode('X')

        // Append Text To Close Button
        closeButton.appendChild(closeButtonText)

        // Add Class To Close Button
        closeButton.className = 'close-button';

        // Add Close Button To Popup Box
        popupBox.appendChild(closeButton)

    })

})

// Close Popup 
document.addEventListener('click', (e) => {

    if (e.target.className == 'close-button') {

        // Remove The Current Popup
        // (parentElement === parentNode)
        e.target.parentNode.remove()

        // Remove Overlay
        document.querySelector('.popup-overlay').remove()

    }

})

// Function To Routing in Links And Bullets
function scrollToSomewhere(element) {

    element.forEach((ele => {

        ele.addEventListener('click', (e) => {
    
            // href='#' من أجل منع  
            e.preventDefault()
    
            document.querySelector(e.target.dataset.section).scrollIntoView({
    
                behavior: 'smooth'
    
            })
    
        })
    
    }))

}

// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet")
scrollToSomewhere(allBullets)

// Select All Links
const allLinks = document.querySelectorAll(".links a")
scrollToSomewhere(allLinks)

