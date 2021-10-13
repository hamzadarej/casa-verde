import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Shop from './components/Shop/Shop';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
       <Nav />
      <main style={{ textAlign: 'center', height: '50vh' }}>
        <Switch>
          <Route path="/" exact render={Home}></Route>
          <Route path="/about" exact render={About}></Route>
          <Route path="/services" exact render={Services}></Route>
          <Route path="/shop" exact render={Shop}></Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
