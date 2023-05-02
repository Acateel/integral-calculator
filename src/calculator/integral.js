/**
 * Отримання випадкового дійсного числа з діапазону
 * @param {*} min мінімальне значення діаназону
 * @param {*} max максимальне значення діаназону
 * @returns
 */
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Отримання інтеграла методом Монте-Карло
 * @param {*} N - кількість генеруємих точок
 * @param {*} Spar - площа прямокутника
 * @param {*} func - функція за якою шукаємо інтеграл
 * @param {*} a - ліва границя інтегрування
 * @param {*} b - права гряниця інтегрування
 * @param {*} Fmax - максимальне значення функції
 * @returns округлений результат інтегралу
 */
function calcIntegral(integralParams) {
  const { N, Spar, func, a, b, Fmax } = integralParams;
  var K = 0;
  for (let i = 0; i < N; i++) {
    var randomX = getRandom(a, b); // [a,b]
    var randomY = getRandom(0, Fmax); // [0,Fmax]
    var y = func(randomX);
    if (randomY < y) {
      K++;
    }
  }
  // знаходимо результат інтегрування
  var integral = (Spar * K) / N;
  // заукруглюємо інтеграл до 4 чифр після крапки
  return Math.round(integral * 10000) / 10000;
}

export default calcIntegral;
