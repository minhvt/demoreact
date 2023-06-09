import logo from './logo.svg';
import './App.css';
import MyCounter from './components/MyCounter';
import MyCounterOther from './components/MyCounterOther';

function App() {
  return (
    <div className="App">
      <MyCounter />
      <hr />
      <h2>Redux cho phép giá trị biến cập nhật ở component khác: </h2>
      <MyCounterOther />
    </div>
  );
}

export default App;
