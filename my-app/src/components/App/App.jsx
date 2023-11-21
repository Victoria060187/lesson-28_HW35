import '../App/App.css';
import Header from '../Header/Header.jsx';
import Aside from '../Aside/Aside.jsx';
import Main from '../Main/Main.jsx';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header_content">
          <Header />
        </div>
        <div className="aside_content">
          <Aside />
        </div>
        <div className="main_content">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
