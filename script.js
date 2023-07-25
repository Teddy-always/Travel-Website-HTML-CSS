let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
   inputNumber.oninput = () =>{
      if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
   };
});

AOS.init({
   duration: 400,
   delay: 200,
});

function startSlideshow() {
      let currentIndex = 0;
      const boxes = document.querySelectorAll('.boxy');

      function showSlide(index) {
        boxes.forEach((box, i) => {
          box.style.display = i === index ? 'block' : 'none';
        });
      }

      function nextSlide() {
        currentIndex = (currentIndex + 1) % boxes.length;
        showSlide(currentIndex);
      }

      function prevSlide() {
        currentIndex = (currentIndex - 1 + boxes.length) % boxes.length;
        showSlide(currentIndex);
      }

      showSlide(currentIndex);
      setInterval(nextSlide, 3000);

      const nextBtn = document.getElementById('nextBtn');
      const prevBtn = document.getElementById('prevBtn');

      nextBtn.addEventListener('click', nextSlide);
      prevBtn.addEventListener('click', prevSlide);
    }

    startSlideshow();