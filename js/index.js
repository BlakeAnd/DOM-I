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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let circle = document.querySelector('#cta-img');
circle.setAttribute('src', siteContent["cta"]["img-src"]);

let widePic = document.querySelector('#middle-img');
widePic.setAttribute('src', siteContent['main-content']["middle-img-src"]);

let navBar = document.querySelectorAll('nav a');
navBar[0].textContent = 'Services';
navBar[1].textContent = 'Product';
navBar[2].textContent = 'Vision';
navBar[3].textContent = 'Features';
navBar[4].textContent = 'About';
navBar[5].textContent = 'Contact';

navBar[0].style.color = 'green';
navBar[1].style.color = 'green';
navBar[2].style.color = 'green';
navBar[3].style.color = 'green';
navBar[4].style.color = 'green';
navBar[5].style.color = 'green';

let newNav1 = document.createElement('a');
newNav1.textContent = 'yeet';
newNav1.style.color = 'green';
let newNav2 = document.createElement('a');
newNav2.textContent = 'yeehaw';
newNav2.style.color = 'green';

let navParent = document.querySelector('nav');
navParent.appendChild(newNav2);
navParent.appendChild(newNav1);

let mainHeader = document.querySelector('h1');
mainHeader.textContent = "DOM Is Awesome";

let topDisp = document.querySelector('.cta');
topDisp.style.display = 'flex';
topDisp.style.flexDirection = 'row';
topDisp.style.justifyContent = 'center';
topDisp.style.justifyContent = 'center';
topDisp.style.alignContent = 'center';

mainHeader.style.verticalAlign  = 'middle';
mainHeader.style.textAlign  = 'center';
mainHeader.style.display = 'flex';
mainHeader.style.flexDirection = 'column';
mainHeader.style.justifyContent = 'center';
mainHeader.style.justifyContent = 'center';
mainHeader.style.alignContent = 'center';





let started = document.querySelector('button');
started.textContent = "Get Started";

let paraTitles = document.querySelectorAll('h4');
paraTitles[0].textContent = 'Features';
paraTitles[1].textContent = 'About';
paraTitles[2].textContent = 'Services';
paraTitles[3].textContent = 'Product';
paraTitles[4].textContent = 'Vision';
paraTitles[5].textContent = 'Contact';

let paras = document.querySelectorAll('p');
paras[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paras[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paras[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paras[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paras[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paras[5].textContent = '123 Way 456 Street Somewhere, USA';
paras[6].textContent = "1 (888) 888-8888";
paras[7].textContent = "sales@greatidea.io";
paras[8].textContent = "Copyright Great Idea! 2018";

