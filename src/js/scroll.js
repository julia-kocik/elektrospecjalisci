let elementsArray = document.querySelectorAll('section');
//console.log(elementsArray);
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


const test = document.getElementById('about').getBoundingClientRect().top;
console.log(window.innerHeight);

console.log(test);
/*
window.onload = function() {
  const $doc = $(document);
  const $offer = $('#offer');
  const $carousel = $('.carousel');
  const $about = $('#about');
  //const $main = $('main');



  $doc.on('scroll', function () {
    //aktualna wartość scrolla
    const scrollPos = $doc.scrollTop();
    console.log(scrollPos);
    
    //gdzie (ile pikseli) jest dany element od początku strony.
    //const sectionOffset = $offer.offset().top;
    // Jaka jest wysokość elementu
    const carouselHeight = $carousel.outerHeight();
    //const offerHeight = $offer.outerHeight();
    const aboutHeight = $about.outerHeight();

    // eslint-disable-next-line jquery/no-css
    $offer.css({
      'opacity': scrollPos / carouselHeight,
    });

    $about.css({
      'opacity': scrollPos / aboutHeight,
    });
    
    console.log(scrollPos / aboutHeight);
    console.log(carouselHeight);

  });
};

window.addEventListener('scroll', function() {
             document.getElementById('headerbgid').style.opacity = 1 - pageYOffset/700;
        });
*/