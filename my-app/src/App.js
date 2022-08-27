import logo from './logo.svg';
import './App.css';

const Header = () => {
  return <h2>"Ангел вітає вас"</h2>
}

const Btn = () => {
  return <button>"Log in"</button>
}

const Input = () => {
  return <input/>
}

function App() {
  return (
    <div>
      <Header/>
      <Input/>
      <Btn/>
    </div>
  );
}

export default App;
