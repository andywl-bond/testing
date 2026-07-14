// FAQ accordion — toggles one item open/closed at a time
document.querySelectorAll('.faq__item').forEach((item) => {
  const question = item.querySelector('.faq__question');
  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('faq__item--open');

    document.querySelectorAll('.faq__item').forEach((el) =>
      el.classList.remove('faq__item--open')
    );

    if (!isOpen) {
      item.classList.add('faq__item--open');
    }
  });
});

// Mobile nav burger toggle (placeholder — wire up a mobile menu panel if you add one)
const burger = document.querySelector('.nav__burger');
if (burger) {
  burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!expanded));
    document.querySelector('.nav__links').classList.toggle('nav__links--mobile-open');
  });
}
