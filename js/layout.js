const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.nav_content');

ham.addEventListener('click', () => {

    if (ham.className === 'hamburger') {
        ham.classList.add('close');
      } else if (ham.className === 'hamburger close') {
        ham.classList.remove('close');
        ham.classList.add('hamburgerback');
      } else if (ham.className === 'hamburger hamburgerback') {
        ham.classList.add('close');
        ham.classList.remove('hamburgerback');
      } else {
        ham.className = 'hamburger';
      }


    if (nav.className == 'nav_content'){
        nav.classList.add('responsive');
    }
    else if (nav.className == 'nav_content responsive') {
        nav.classList.add('responsiveReturn')
    }
    else if (nav.className == 'nav_content responsive responsiveReturn') {
        nav.classList.remove('responsiveReturn')
        
    }
    else{
        nav.className = 'nav_content'
    }
})