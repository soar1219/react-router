import { BrowserRouter, Link, Switch } from 'react-router-dom';

import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

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
      <Switch> {/* どのパスでどのコンポーネントを出すか記述していく */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>

      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
