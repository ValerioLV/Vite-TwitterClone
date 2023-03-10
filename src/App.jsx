//Esercizio 10-3-23 - useRef
// Ho provato ad implementare la funzionalità di editare i singoli tweet, ma ci sono riuscito
// solo in parte

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
