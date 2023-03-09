//Esercizio 9-3-23 - useRef
// Ho implementato la possibilità di aumentare il numero di commenti presenti in un tweet premendo
// l'apposita icona

// Ho fatto un' aggiunta supplementare, ossia, tramite prop e una costante, posso filtare i commenti tramite 
// il valore input della barra del header

import Content from './components/content/';
import SideTrends from './components/sideTrends';
import './App.css'

function App() {
  return (
    <div className="App">
      <Content />
      <SideTrends />
    </div>
  );
};

export default App
