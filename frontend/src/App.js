import React, { useState } from 'react';

import Header from './Header';

function App() {
  // Estado
  // Array [valor, função para alterar valor]
  // Não é possível alterar diretamente o valor da variável
  // Imitabilidade
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
