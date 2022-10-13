
/*
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
 */
 const sections = document.querySelectorAll('section')
 const navbarList = document.getElementById('navbar__list')
 const menuSection = ['Section 1', 'Section 2', 'Section 3', 'form-section']
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
 function menu() {
     for (let i = 0; i < sections.length; i++) {
         const List = document.createElement('li')
         const anchor = document.createElement('a')
         anchor.textContent = menuSection[i]
         anchor.setAttribute('class', 'link')
         anchor.setAttribute('href', `#${sections[i].id}`)
         navbarList.appendChild(List)
         List.appendChild(anchor)
     }
 }
 menu();
 // Scroll to anchor ID using scrollTO event
 function anchorScroll() {
     navbarList.addEventListener('click', (e) => {
         e.preventDefault()
         const targetLink = e.target
         const targetSection = document.querySelector(targetLink.getAttribute('href'))
         targetSection && targetSection.scrollIntoView({
             behavior: 'smooth'
         })
     })
 }
 anchorScroll();
 /**
  * End Main Functions
  * Begin Events
  * 
  */
 // Set sections as active
 // Add class 'active' to section when near top of viewport
 function makeActive() {
     sections.forEach((section) => {
         window.addEventListener("scroll", () => {
             const box = section.getBoundingClientRect();
             const currentSection = section.getAttribute('id')
             const navLink = document.querySelector(`[href='#${currentSection}']`)
             if (box.top <= 20 && box.bottom >= 0) {
                 navLink.classList.add('active')
             } else {
                 navLink.classList.remove('active')
             }
         })
     })
 }
 makeActive();
 //Form submission success
 const form = document.querySelector('form')
 form.addEventListener('submit', function(e) {
     e.preventDefault()
     const success = document.createElement('p')
     success.textContent = 'Submitted successfully!'
     form.appendChild(success)
     form.reset()
     setTimeout(() => {
         success.remove()
     }, 3000)
 })