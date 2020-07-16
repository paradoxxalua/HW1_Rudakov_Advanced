// Оголошенно змінні, тим данних number
const potatoSeed = 15.678;
const oakSeed = 123.965;
const bilberrySeed = 90.2345;

// Використоно метод Math.max/min, для отримання найбільшого та найменшого значення ціни
const maxPrice = Math.max(potatoSeed, oakSeed, bilberrySeed);
const minPrice = Math.min(potatoSeed, oakSeed, bilberrySeed);

// Суму усіх цін присвоєно в одну змінну
const sumSeedPrice = (potatoSeed + oakSeed + bilberrySeed);

// Сума цін усього заданого насіння окреглену у меншу сторону
const sumLowerInt = Math.floor(sumSeedPrice);


// Сума заданих цін, яка округлена до сотень
const sumHigherInt = Math.round(sumSeedPrice / 100) * 100;

// Перевірка, на парність суми усіх цін на насіння
const oddOrEven = n => !(n % 2);

// Виведення суми решти при оплаті 500грн
let pay = 500;
const remainderSeed = (pay - sumSeedPrice);

// Виведено середнє значення цін, округлене до другого знаку після коми
const middleVal = sumSeedPrice/3;

// Для клієнта створена можливість отримати знижку випадковим чином, виведено суму оплати зі знижкою та сума прибутку продавця
const saleValue = Math.floor(Math.random() * (100 - 1) + 1); // Обраховує рандомний відсоток для знижки кожному покупцю

const toPay = (sumSeedPrice - sumSeedPrice*saleValue/100); // Обрахує суму до сплати покупцю з урахування знижки

const costProd = (sumLowerInt/2); // Собівартість усього товару разом
const moneyEarnd = -(costProd- toPay); // Заробіток продавці після продажу


// Вивід данних у HTML 
const toHtml = document.getElementById('barvaToHtml');

toHtml.innerHTML = `
<p>Насіння картопляне: ${potatoSeed}</p>
<p>Насіння дуба: ${oakSeed}</p>
<p>Чорниці насіння: ${bilberrySeed}</p>
<p>Найдорощий товар: ${maxPrice}</p>
<p>Найдешевший товар: ${minPrice}</p>
<p>Сума усіх цін: ${sumSeedPrice}</p>
<p>Сума цін округлена у меншу сторону: ${sumLowerInt}</p>
<p>Сума цін округлена до сотень: ${sumHigherInt}</p>
<p>Чи сума є парною: ${oddOrEven(sumLowerInt)}</p>
<p>Решта продавцю з оплатою у 500грн: ${remainderSeed.toFixed(2)}</p>
<p>Середнє значення цін: ${middleVal.toFixed(2)}</p>
<p>Знижка для клієнта: ${saleValue}%</p>
<p>Сума до сплати: ${toPay.toFixed(2)}</p>
<p>Прибуток продавця: ${moneyEarnd.toFixed(2)}</p>
`;
