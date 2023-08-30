import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import Form from './component/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{color:'red'}}>test 1: 文字內容</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <p style={{color:'red'}}>test 2: 點擊事件</p>
        <Counter />
        <br />
        <p style={{color:'red'}}>test 3: 打勾確認同意</p>
        <Form />
      </header>
    </div>
  );
}

export default App;
