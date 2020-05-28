'use strict';

const score = document.querySelector('.score'),
      tap = document.querySelector('.tap'),
      text = document.createElement('p'),
      buy = document.querySelector('.buy'),
      items = document.querySelector('.item1'),
      howCost = document.querySelector('.howCost');

const options = {
      money: 0,
      boost: 0,
      cost: [10],
      cash: [],
      buyer: function() {
     if(options.money == 10 && options.money >= 10) {
         buy.textContent = 'Доступно к покупке';
         buy.addEventListener('click', () => {
             options.boost =+ 1;
     if (options.boost == 1){
            }
            buy.textContent = `У вас имеется ${options.boost} буст`;
         });
    } else if (options.money < 10) {
         buy.addEventListener('click', () => {
         buy.textContent = "Недостаточно средств.";
         });
         }                   
    },
};

tap.addEventListener('click', () => {
    if(++options.money) {
        score.innerHTML = `Ваш счёт: ${options.money} монет`;
        options.buyer();
    } 
});

// Смена текста.
howCost.textContent = `Стоимость буста ${options.cost}`;

buy.textContent = "Купить буст";

text.textContent = 'Нажми на меня';

tap.append(text); // Добавление текста.

console.log(options.boost);

