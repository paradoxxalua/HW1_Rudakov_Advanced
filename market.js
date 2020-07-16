// Оголошенно змінні, тим данних number
let potatoSeed = 15.678;
let oakSeed = 123.965;
let bilberrySeed = 90.2345;

// Використоно метод Math.max/min, для отримання найбільшого та найменшого значення ціни
let maxPrice = Math.max(potatoSeed, oakSeed, bilberrySeed);
let minPrice = Math.min(potatoSeed, oakSeed, bilberrySeed);

// Суму усіх цін присвоєно в одну змінну
let sumSeedPrice = (potatoSeed + oakSeed + bilberrySeed);

// Сума цін усього заданого насіння окреглену у меншу сторону
let sumLowerInt = Math.floor(sumSeedPrice);


// Сума заданих цін, яка округлена до сотень
let sumHigherInt = Math.round(sumSeedPrice / 100) * 100;

// Перевірка, на парність суми усіх цін на насіння
let oddOrEven = n => !(n % 2);

// Виведення суми решти при оплаті 500грн
let pay = 500;
let remainderSeed = (pay - sumSeedPrice);

// Виведено середнє значення цін, округлене до другого знаку після коми
let middleVal = sumSeedPrice/3;

// Для клієнта створена можливість отримати знижку випадковим чином, виведено суму оплати зі знижкою та сума прибутку продавця
let saleValue = Math.floor(Math.random() * (100 - 1) + 1); // Обраховує рандомний відсоток для знижки кожному покупцю

let toPay = (sumSeedPrice - sumSeedPrice*saleValue/100); // Обрахує суму до сплати покупцю з урахування знижки

let costProd = (sumLowerInt/2); // Собівартість усього товару разом
let moneyEarnd = -(costProd- toPay); // Заробіток продавці після продажу


// Вивід данних у HTML 
const toHtml = document.querySelector('#barvaToHtml');

toHtml.innerHTML = `
<p>Насіння картопля: ${potatoSeed}</p>
<p>Насіння дуб: ${oakSeed}</p>
<p>Насіння чорниц: ${bilberrySeed}</p>
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
