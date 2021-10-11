import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Products from './components/Products';

function App() {
  let now = new Date();
  let year = now.getFullYear();
  const stylingObject = {
    ul: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      fontSize: '2rem',
      gap: '1rem',
    },
    li: {
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
      color: 'gray',
    },
    text: {
      textAlign: 'center',
    },
  };
  return (
    <Router>
      <header style={{ textAlign: 'center' }}>
        <div className="whatever">
          <nav>
            <h1 class="logo" style={{ textAlign: 'center' }}>
              Casa Verde
            </h1>
            <ul style={stylingObject.ul}>
              <li style={stylingObject.li}>
                <Link style={stylingObject.a} to={'/'}>
                  Home
                </Link>
              </li>
              <li style={stylingObject.li}>
                <Link style={stylingObject.a} to={'/about'}>
                  About
                </Link>
              </li>
              <li style={stylingObject.li}>
                <Link style={stylingObject.a} to={'/blog'}>
                  Blog
                </Link>
              </li>
              <li style={stylingObject.li}>
                <Link style={stylingObject.a} to={'/products'}>
                  Products
                </Link>
              </li>
            </ul>
          </nav>
        </div>
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
