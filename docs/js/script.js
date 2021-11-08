{
  const burger = document.querySelector('.burger');
  const navList = document.querySelector('.nav-ul');
  const offer = document.getElementById('offer');

  const activateNavList = () => {
    navList.classList.toggle('show');
  };

  const hideNavList = () => {
    navList.classList.remove('show');
  };

  burger.addEventListener('click', activateNavList);
  offer.addEventListener('click', hideNavList);

}