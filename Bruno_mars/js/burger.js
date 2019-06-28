
    const menuThree = document.querySelector('.menuThree');
    const slideMenu = document.querySelector('.slide_menu');

    function addClassFunThree() {
        this.classList.toggle("clickMenuThree");
        slideMenu.classList.toggle("hiden");
    }
    menuThree.addEventListener('click', addClassFunThree);
