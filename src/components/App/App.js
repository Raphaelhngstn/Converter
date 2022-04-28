import './App.scss';
import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import data from '../../data/currencies';
import Amount from '../Amount/Amount';

function App() {
  return (
    <div className="app">
        <Header />
        <Currencies currencies={data}/>
        <Amount 
          value={data[0].rate}
          currency={data[0].name}
        />
    </div>
  );
}

export default App;
