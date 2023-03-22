import './App.css';
import { useSelector } from 'react-redux'

function App() {
  const counter = useSelector(state => state.counter.value);
  return (
    <div className="App">
      {counter}
    </div>
  );
}

export default App;
