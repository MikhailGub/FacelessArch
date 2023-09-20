const clickButton = document.querySelector('.promo__click');

clickButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    const backImg = document.querySelector('.promo__box');
    backImg.classList.toggle('promo__box_active');

    const backText = document.querySelector('.info__back');
    backText.classList.toggle('info__back_active');

    const infoText = document.querySelector('.info__text');
    infoText.classList.toggle('info__text_active');
    
    const imgSwap = document.querySelector('.promo__lorem');
    imgSwap.classList.toggle('promo__lorem_active');
});

const filterBox = document.querySelectorAll('.box');

document.querySelector('nav').addEventListener('click', event => {
   if (event.target.tagName !== 'LI') return false;
   
   let filterClass = event.target.dataset['f'];

    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass!== 'all') {
            elem.classList.add('hide');
        }
    });

});