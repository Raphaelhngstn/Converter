import './App.scss';
import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import data from '../../data/currencies';

function App() {
  return (
    <div className="app">
        <Header />
        <Currencies currencies={data}/>
    </div>
  );
}

export default App;
