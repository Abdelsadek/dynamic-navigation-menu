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
 * Define Global Variables
 * 
*/

const sectionsArray =  Array.from(document.querySelectorAll("section"));
const navBar = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// build the nav
function createNavBar(sectionsArray){
    for(let i=0; i<sectionsArray.length; i++){
        const navItem = document.createElement('li');
        const itemLink = document.createElement('a');
        const sectionId = sectionsArray[i].getAttribute('id');
        navItem.setAttribute('class',sectionId);
        navBar.appendChild(navItem);
        navItem.appendChild(itemLink);
        itemLink.textContent = sectionsArray[i].getAttribute('data-nav');
       itemLink.setAttribute('href', "#"+ sectionId );
        itemLink.setAttribute('class', "menu__link" );
    }
}
  //change the section appearance
  // Add class 'active' to section when near top of viewport
  function activateSectionInViewPort () {
 for (section of sectionsArray ) {
        let rect = section.getBoundingClientRect();
        if(rect.top>=0 && rect.top<100)
        {           
  //if section is in focus
    //add the class name to the section and NavItem
                   section.classList.add('your-active-class');  
                  const sectionIn = section.getAttribute('id');
                  document.querySelector('.'+sectionIn).classList.add('your-active-class');

        }    
         else { 
//if not, remove the class+ name
                 section.classList.remove('your-active-class');
                 const sectionIn = section.getAttribute('id');
                 document.querySelector('.'+sectionIn).classList.remove('your-active-class');
                }
                                   }
                                        }
                               
                                
    // Build menu 

   createNavBar(sectionsArray);

    // Scroll to anchor ID using scrollIntoView event
   document.querySelectorAll('a').forEach(anchor => {
    	anchor.addEventListener('click', function (e) {
        	e.preventDefault();
        	document.querySelector(this.getAttribute('href')).scrollIntoView({ 
             behavior: 'smooth', block: "start", inline: "nearest"
             });
      	});
});


/**
 * End Main Functions
 * Begin Events
 * 
 *
*/



// Set sections as active
document.addEventListener('scroll',activateSectionInViewPort);

  
