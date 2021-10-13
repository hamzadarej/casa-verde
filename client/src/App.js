import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Products from './components/Products';
import Nav from './components/Navigation/Nav';

function App() {
  let now = new Date();
  let year = now.getFullYear();
  
  return (
    <Router>
      <header style={{ textAlign: 'center' }}>
       <Nav />
      </header>
      <main style={{ textAlign: 'center', height: '50vh' }}>
        <Switch>
          <Route path="/" exact render={Home}></Route>
          <Route path="/about" exact render={About}></Route>
          <Route path="/blog" exact render={Blog}></Route>
          <Route path="/products" exact render={Products}></Route>
        </Switch>
      </main>
      <footer
        style={{
          textAlign: 'center',
          position: 'absolute',
          bottom: '30px',
          left: '50vw',
          transform: 'translateX(-50%)',
        }}
      >
        {' '}
        <div className="--footer-main-container">Made with ❤️</div>{' '}
        <div className="--footer-secondary-container">{year}</div>
      </footer>
    </Router>
  );
}

export default App;
