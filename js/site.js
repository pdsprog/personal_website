const site = {
  mobileBtn: document.querySelector('.mobile_menu'),
  menuItems: document.querySelectorAll('.header_navbar--item'),
  cards: document.querySelectorAll('.portfolio_cards--card'),

  displayMenu() {
    if (window.screen.width < 768) {
      const menu = document.querySelector('.header');
      const icon = document.querySelector('.mobile_menu--icon');
  
      menu.classList.toggle('header_menuOn');
      icon.classList.toggle('mobile_menu--rotate');
    }
  },

  displayBackCard() {
    this.cards.forEach(card => {
      card.addEventListener('click', function () {
        const card = this.children[1];
        const liveBtn = card.children[1];
        const codeBtn = card.children[2];
        card.classList.toggle('portfolio_backCardOn')
        setTimeout(() => {
          liveBtn.classList.toggle('portfolio_displayButtons');
          codeBtn.classList.toggle('portfolio_displayButtons');
        }, 50);
      })
    })
  },

  init() {
    //Mobile Button
    this.mobileBtn.addEventListener('click', this.displayMenu);
    this.menuItems.forEach(item => item.addEventListener('click', this.displayMenu));

    //General
    AOS.init({duration: 700});
    this.displayBackCard();
  }
}

site.init();