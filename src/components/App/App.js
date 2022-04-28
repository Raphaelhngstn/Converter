import './App.scss';
import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import data from '../../data/currencies';
import Amount from '../Amount/Amount';
import { useState } from 'react';

function App() {

  const [currency, setCurrency] = useState(data[0]);

  return (
    <div className="app">
        <Header />
        <Currencies 
          setCurrency={setCurrency}
          currencies={data}/>
        <Amount 
          value={currency.rate}
          currency={currency.name}
        />
    </div>
  );
}

export default App;
