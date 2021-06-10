import './App.css';
import Person from './components/person/person';
import Welcome from './components/welcome/welcome';
import NumberEven from './components/number-even/number-even'
import Counter from './components/counter/counter';

function App() {

  return (
    <div className="App">

      {/* Commentaire dans le JSX ! */}
      {/* <Welcome name="Zaza" /> */}

      {/* <Person firstname="Della"
              lastname="Duck"
              age={42} /> */}

      {/* <NumberEven number={42} /> */}

      <Counter />
    </div>
  );
}

export default App;
