let elementsArray = document.querySelectorAll('section');

window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
  for (let i = 0; i < elementsArray.length; i++) {
    const elem = elementsArray[i];
    const distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
    if (distInView < 0) {
      elem.classList.add('inView');
    } else {
      elem.classList.remove('inView');
    }
  }
}
fadeIn();

