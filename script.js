'use strict';

const score = document.querySelector('.score'),
      tap = document.querySelector('.tap'),
      buy = document.querySelectorAll('.newButtonForBuy'),
      howCost = document.querySelector('.howCost');

const options = {
      money: 0,
      boost: {
        firstBoost: 0,
        secondBoost: 0,
        ThreeBoost: 0,
        fourBoost: 0,
        fiveBoost: 0,
        sixBoost: 0
            },
      cost: 10,
      cash: [],
      buyer: function() {
        if(options.money == 10 && options.money >= 10) {
         buy[0].innerHTML = `<p> Доступно к покупке </p>`;
         buy[0].addEventListener('click', () => {
             options.boost.firstBoost + 1;
        if(options.boost.firstBoost == 1){
            buy[0].textContent = `У вас имеется ${options.boost.firstBoost} буст`;
         }
         }); 
        } else if (options.money <= 10) {
         buy[0].addEventListener('click', () => {
         buy[0].innerHTML = `<p>Недостаточно средств </p>`;
         });
         }
          console.log(options.boost);
    },
    buttons: function () {
    buy.forEach(item => {
        item.style.width = 200 + 'px';
        item.style.display = 'inline-block';
        item.style.borderRadius = 10 + 'px';
        item.innerHTML = `<p>Купить буст</p>`;
    })
}
};

options.buttons();

tap.addEventListener('click', () => {
    if(++options.money) {
        score.innerHTML = `<p>Ваш счёт: ${options.money} монет</p>`;
        options.buyer();
    } 
});

// Смена текста.
howCost.innerHTML = `<p>Стоимость буста: ${options.cost} монет </p>`;