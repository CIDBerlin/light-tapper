'use strict';

const options = {
    money: 1,
    boost: 0,
    number: 0,
    cost: 0,
    cash: 1
};

let someMoney = options.cost + options.boost;

const score = document.querySelector('.score'),
    tap = document.querySelector('.tap'),
    buy = document.querySelectorAll('.newButtonForBuy');

const buyButton = buy.length ? buy[0] : null;

const addMoney = () => {
    const {boost} = options;
    // Увеличиваем в том случае, если уровень не больше 10
    if (boost <= 10) {
        someMoney += boost !== 0 ? boost : 1;
        updateMoneyNeededCount(boost);
        updateScore();
    }
};

const buyBoost = () => {
    if (someMoney >= options.cash) {
        someMoney -= options.cash;
        options.cash *= 3;
        options.boost += 1;
        options.cost += 1;
        updateScore();
        buyButton.innerHTML = `<p>Поздравляем с покупкой!</p>`;
        // Показываем поздравление на 1 секунду, потом отображаем текущее состояние счетчика
        setTimeout(() => {
            updateMoneyNeededCount(options.boost);
        }, 1000);
    }
};

/**
 * Простая функция, которая обновляет отображение количества монет
 */
const updateScore = () => {
    score.innerHTML = `<p>Ваш счёт: ${someMoney} монет</p>`;
};

/**
 * тоже самое, но для отображения кол-ва денег для буста
 * @param level
 */
const updateMoneyNeededCount = (level = 0) => {
    buyButton.innerHTML = level >= 10
        ? `<p> У вас максимальный уровень буста </p>`
        : `<p>Требуется: ${options.cash} </p>`;
};

/**
 * навешиваем события лишь только в том случае, если кнопка была найдена
 */
if (buyButton && tap) {
    tap.addEventListener('click', addMoney);
    buyButton.addEventListener('click', buyBoost);
    buyButton.innerHTML = `<p>Кол-во: 0 </p>`;
}

