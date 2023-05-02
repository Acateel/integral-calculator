import calcIntegral from "./integral";

/**
 * Округлення числа до трьох десятичних знаків
 * @param {*} x - числа що округлюється
 * @returns округлене число
 */
function round(x) {
  return Math.round(x * 1000) / 1000;
}

/**
 * Визначення оцінки обрахованого інтегралу
 * @param {*} integralParams - параметри для інтегрування
 * @param {*} St - точне значення інтегралу
 * @returns повертає об'єкт типу
 *          {
 *              M - матиматичне очікування
 *              sqrtD - середньо-квадратичне відхилення
 *              Q - Абсолютка похибка
 *          }
 */
function calcOcuracity(integralParams, St) {
  const { N } = integralParams;
  var sumS = 0;
  var sumS2 = 0;

  // визначення суми значеннь інтегралів та квадрату сум
  for (let i = 0; i < N; i++) {
    var Si = calcIntegral(integralParams);
    sumS += Si;
    sumS2 += Math.pow(Si, 2);
  }
  // визначення матиматичного очікування
  const M = sumS / N;
  // визначення дисперсії
  const D = (sumS2 - 2 * M * sumS + N * Math.pow(M, 2)) / N;
  // повернення окрушленого результату обчислень
  return {
    M: round(M),
    sqrtD: round(Math.sqrt(D)),
    Q: round(M - St),
  };
}

export default calcOcuracity;
