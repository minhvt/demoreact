import logo from './logo.svg';
import './App.css';
import MyCounter from './components/MyCounter';
import MyCounterOther from './components/MyCounterOther';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
      <Employee />
      {/* <MyCounter />
      <hr />
      <h2>Redux cho phép giá trị biến cập nhật ở component khác: </h2>
      <MyCounterOther /> */}
    </div>
  );
}

export default App;
