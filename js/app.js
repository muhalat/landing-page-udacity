/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.getElementsByTagName('section')

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const nav = document.getElementById('navbar__list');
nav.innerHTML='<li> <a href="#">Home</a> </li> <li> <a href="#">About</a> </li> <li> <a href="blog-post.html">Gallery</a> </li> <li> <a href="#">Contact</a> </li>'

nav.addEventListener('keypress', function(){
    console.log("stop touching me!!!!")
})
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
nav.addEventListener('click',function(){
    window.scrollTo( {top: 100,
        left: 100,
        behavior: 'smooth'})
})
// Set sections as active
function makeActive(){
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        if (box.top <= 250 && box.bottom >= 0) {
        console.log ("activeState");
        } else {
            console.log("inactive");
        }
     }
  }

document.addEventListener("scroll", function() { makeActive();});
//Form submission success
const done = document.getElementById('submit');
done.addEventListener('click', function(){
    document.getElementById('passwordalert').innerHTML='<span style="color:green">Submitted successfully!</span>'
    
})


