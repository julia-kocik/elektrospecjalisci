{
  const images = [
    {
      src: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      alt: 'Slider image one'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2020/08/14/17/13/light-bulbs-5488573_1280.jpg',
      alt: 'Slider image two'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2016/02/19/10/55/light-bulb-1209491_1280.jpg',
      alt: 'Slider image three'
    },
  ];

  const img = document.querySelector('.slider-item');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  // set starting item
  let currentItem = 0;

  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
    const item = images[currentItem];
    img.src = item.src;
    img.alt = item.alt;
  });

  // show person based on item
  function showPhoto(photo) {
    const item = images[photo];
    img.src = item.src;
    img.alt = item.alt;
  }

  // show next photo
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > images.length - 1) {
      currentItem = 0;
    }
    showPhoto(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = images.length - 1;
    }
    showPhoto(currentItem);
  });

  setInterval(() => {
    currentItem++;
    if (currentItem > images.length - 1) {
      currentItem = 0;
    }
    showPhoto(currentItem);
    img.classList.add('slider-fade');
    setTimeout(() => {
      img.classList.remove('slider-fade');
    }, 4000);
  }, 5000);
}