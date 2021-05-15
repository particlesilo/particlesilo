import logo from './logo.svg';
import './App.css';
import { styleClass } from './utils/style_class';
import Routes from './routes';

function App() {
  return (
    <div className={styleClass.bodyBackground}>
      <Routes />
    </div>
  );
}

export default App;
