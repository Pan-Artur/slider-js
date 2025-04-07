document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentSlide = 0;

  // Показати поточний слайд
  const showSlide = (n) => {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    currentSlide = (n + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  };

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

  nextBtn.addEventListener("click", nextSlide);

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  prevBtn.addEventListener("click", prevSlide);

  // Обробники для точок
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
  });

  // Автоматичне перемикання
  // let slideInterval = setInterval(nextSlide, 3000);

  // Зупинити автоматичне перемикання при наведенні
  // const slider = document.querySelector(".slider");
  // slider.addEventListener("mouseenter", () => clearInterval(slideInterval));
  // slider.addEventListener("mouseleave", () => {
  //     slideInterval = setInterval(nextSlide, 3000);
  // });
});
