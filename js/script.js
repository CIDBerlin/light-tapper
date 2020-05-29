'use strict';

const score = document.querySelector('.score'),
      tap = document.querySelector('.tap'),
      buy = document.querySelectorAll('.newButtonForBuy'),
      howCost = document.querySelector('.howCost');

const options = {
      money: 1,
      boost: 0,
      number: 0,
      cost: 0,
      cash: 1
    }    

let someMoney = options.cost + options.boost;

tap.addEventListener('click', () => {
    if (options.boost == 0) {
        buy[0].innerHTML = `<p> Boost x1 </p>`;
    } else if (options.boost == 1) { // Заработало!
        someMoney+=1;
        buy[0].innerHTML = `<p>Требуется: ${options.cash} </p>`;
    } else if (options.boost == 2) {
        someMoney+=2;
        buy[0].innerHTML = `<p>Требуется: ${options.cash} </p>`;
    } else if (options.boost == 3) {
        someMoney+=3;
        buy[0].innerHTML = `<p>Требуется: ${options.cash} </p>`;
    } else if (options.boost == 4) {
        someMoney+=4;
        buy[0].innerHTML = `<p>Требуется: ${options.cash} </p>`;
    } else if (options.boost == 5) {
        someMoney+=5;
        buy[0].innerHTML = `<p>Требуется: ${options.cash} </p>`;
    } else if (options.boost == 6) {
        someMoney+=6;
        buy[0].innerHTML = `<p>Требуется: ${options.cash} </p>`;
    } else if (options.boost == 7) {
        someMoney+=7;
        buy[0].innerHTML = `<p>Требуется: ${options.cash} </p>`;
    } else if (options.boost == 8) {
        someMoney+=8;
        buy[0].innerHTML = `<p>Требуется: ${options.cash} </p>`;
    } else if (options.boost == 9) {
        someMoney+=9;
        buy[0].innerHTML = `<p>Требуется: ${options.cash} </p>`;
    } else if (options.boost == 10) {
        someMoney+=10;
        buy[0].innerHTML = `<p> Max </p>`;
    }
    score.innerHTML = `<p> Ваш счёт: ${++someMoney} монет </p>`;
});

buy[0].addEventListener('click', () => {
    if(someMoney >= options.cash && options.boost < 10) {
        someMoney -= options.cash;
        options.cash *= 3;
        options.boost += 1;
        options.cost += 1;
        score.innerHTML = `<p> Ваш счёт: ${someMoney} монет </p>`;
        buy[0].innerHTML = `<p>Поздравляем с покупкой!</p>`;
    } else if (options.boost <= 10) {
        buy[0].innerHTML = `<p>Max</p>`; 
    } else {
        buy[0].innerHTML = `<p>Требуется: ${options.cash} </p>`; 
    }
});

buy[0].innerHTML = `<p>Кол-во: 0 </p>`;

console.log(someMoney);

