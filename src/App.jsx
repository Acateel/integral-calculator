import { useState } from "react";
import calcIntegral from "./calculator/integral";
import calcOcuracity from "./calculator/ocuracity";

function App() {
  const [N, setN] = useState("");
  const [integral, setIntegral] = useState(0);

  const St = 2.2182;
  const [ocuracity, setOcuracity] = useState({ M: 0, sqrtD: 0, Q: 0 });

  const onClick = () => {
    const integralParams = {
      N: +N,
      Spar: 3.7183,
      func: (x) => Math.exp(x) + x,
      a: 0,
      b: 1,
      Fmax: 3.7183,
    };
    setIntegral(calcIntegral(integralParams));
    setOcuracity(calcOcuracity(integralParams, St));
  };

  return (
    <div className="content">
      <h1>Обчислення інтегралу методом Монте-Карло</h1>
      <h3>
        Функція: <code>exp(x)+x</code>
      </h3>
      <h3>
        Інтервал: <code>[0,1]</code>
      </h3>
      <h3>
        Площа прямокутника: <code>3,7183</code>
      </h3>
      <label>Кількість генеруємих точок</label>
      <input
        type="number"
        value={N}
        onChange={(e) => setN(e.target.value)}
        placeholder="Введіть N"
      />
      <button onClick={onClick}>Визначити інтеграл</button>
      <h3>Результат обчислення інтегралу:</h3>
      <code>{integral}</code>
      <hr />
      <h1>Оцінка точності обрахувать</h1>
      <h3>
        Точне значення інтегралу: <code>{St}</code>
      </h3>
      <h3>
        Математичне очікування: <code>{ocuracity.M}</code>
      </h3>
      <h3>
        Середньоквадратичне відхілення: <code>{ocuracity.sqrtD}</code>
      </h3>
      <h3>
        Обсолютка похибка: <code>{ocuracity.Q}</code>
      </h3>
    </div>
  );
}

export default App;
