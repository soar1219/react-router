import { BrowserRouter, Link, Switch } from 'react-router-dom';

import './App.css';
import { Router } from './router/Router';


function App() {
  return (
    <BrowserRouter> {/* Routerで囲った範囲の中でRouterを使えるようにする */}
      <div className="App">
        <Link to="/">HOME</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
    
  );
}

export default App;
