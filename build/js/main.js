const initApp = () => {
  const hamgurgerBtn = document.getElementById('hamburger-button')
  const mobileMenu = document.getElementById('mobile-menu')

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('flex')
    hamgurgerBtn.classList.toggle('toggle-btn')
  }

  hamgurgerBtn.addEventListener('click',toggleMenu)
  mobileMenu.addEventListener('click', toggleMenu)

}

document.addEventListener('DOMContentLoaded',initApp);