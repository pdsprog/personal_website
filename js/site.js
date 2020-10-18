const site = {
  mobileButton: document.querySelector('.mobile_menu'),
  menuItems: document.querySelectorAll('.header_navbar--item'),

  displayMobileMenu() {
    if (window.screen.width < 768) {
      const menu = document.querySelector('.header');
      const icon = document.querySelector('.mobile_menu--icon');
  
      menu.classList.toggle('header_menuOn');
      icon.classList.toggle('mobile_menu--rotate');
    }
  },

  init() {
    this.mobileButton.addEventListener('click', this.displayMobileMenu);
    this.menuItems.forEach(item => item.addEventListener('click', this.displayMobileMenu));
  }
}

site.init();