const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//navbar

let navLinks = document.querySelectorAll('nav a');
navLinks = Array.from(navLinks);

navLinks[0].textContent = siteContent['nav']['nav-item-1'];
navLinks[1].textContent = siteContent['nav']['nav-item-2'];
navLinks[2].textContent = siteContent['nav']['nav-item-3'];
navLinks[3].textContent = siteContent['nav']['nav-item-4'];
navLinks[4].textContent = siteContent['nav']['nav-item-5'];
navLinks[5].textContent = siteContent['nav']['nav-item-6'];


//cta

let ctaHeading = document.querySelector('.cta-text h1');
let ctaButton = document.querySelector('.cta-text button');
let ctaImg = document.querySelector('#cta-img');


ctaHeading.innerHTML = siteContent['cta']['h1'].split(' ').join('<br>');
ctaButton.textContent = siteContent['cta']['button'];
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

//main-content
let mainContent = document.querySelector('.main-content');
let topContent = mainContent.querySelector('.top-content');
let bottomContent = mainContent.querySelector('.bottom-content');
let middleImg = document.getElementById('middle-img');

topContent = Array.from(topContent.querySelectorAll('.text-content'))

topContent[0].querySelector('h4').textContent = siteContent['main-content']['features-h4']
topContent[0].querySelector('p').textContent = siteContent['main-content']['features-content'];
topContent[1].querySelector('h4').textContent = siteContent['main-content']['about-h4']
topContent[1].querySelector('p').textContent = siteContent['main-content']['about-content'];

middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

bottomContent = Array.from(bottomContent.querySelectorAll('.text-content'))

bottomContent[0].querySelector('h4').textContent = siteContent['main-content']['services-h4'];
bottomContent[0].querySelector('p').textContent = siteContent['main-content']['services-content'];
bottomContent[1].querySelector('h4').textContent = siteContent['main-content']['product-h4'];
bottomContent[1].querySelector('p').textContent = siteContent['main-content']['product-content'];
bottomContent[2].querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
bottomContent[2].querySelector('p').textContent = siteContent['main-content']['vision-content'];

//contact
let contactSection = document.querySelector('.contact');
let contactSectionParagraphs = Array.from(contactSection.querySelectorAll('p'));

contactSection.querySelector('h4').textContent = siteContent['contact']['contact-h4'];
contactSectionParagraphs[0].innerText = '123 Way 456 Street\nSomewhere, USA';
contactSectionParagraphs[1].textContent = siteContent['contact']['phone'];
contactSectionParagraphs[2].textContent = siteContent['contact']['email'];

//footer
let footerText = document.querySelector('footer p');

footerText.textContent = siteContent['footer']['copyright'];

//task 3
navLinks.forEach(link => link.style.color = 'green');
let newNavLink = document.createElement('a');
newNavLink.innerText = 'Blog';
// document.querySelector('nav').appendChild(newNavLink);
// document.querySelector('nav').prepend(newNavLink);


//stretch
let bgColorButton = document.createElement('button');
bgColorButton.innerText = 'Change My Background Colour';
bgColorButton.setAttribute('onclick', "document.querySelector('body').style.backgroundColor = 'pink'"); 
contactSection.appendChild(bgColorButton);
