const site = {
  mobileBtn: document.querySelector('.mobile_menu'),
  menuItems: document.querySelectorAll('.header_navbar--item'),

  displayMenu() {
    if (window.screen.width < 768) {
      const menu = document.querySelector('.header');
      const icon = document.querySelector('.mobile_menu--icon');
  
      menu.classList.toggle('header_menuOn');
      icon.classList.toggle('mobile_menu--rotate');
    }
  },

  init() {
    //Mobile Button
    this.mobileBtn.addEventListener('click', this.displayMenu);
    this.menuItems.forEach(item => item.addEventListener('click', this.displayMenu));

    //General
    AOS.init({duration: 700});
  }
}

site.init();