import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
<<<<<<< HEAD
=======
import About from './components/footer/About';
import Services from './components/Services';
>>>>>>> e72ed3f (adding register component to the application)
import Shop from './components/Shop/Shop';
import Services from './components/Services';
import Events from './components/Events';
import Rent from './components/Rent';
import BalletAndPilates from './components/BalletAndPilates';
import TechnicalConsulting from './components/TechnicalConsulting';
import Footer from './components/Footer';
<<<<<<< HEAD
import About from './components/About';
import Contact from './components/Contact';
=======
import Contact from './components/footer/Contact';
import Login from './components/Login';
import Register from './components/Register';
>>>>>>> e72ed3f (adding register component to the application)

const App = () => {
  return (
    <Router>
      <Nav />
      <main style={{ textAlign: 'center', height: '50vh' }}>
        <Switch>
          <Route path="/" exact render={Home}></Route>
          <Route path="/shop" exact render={Shop}></Route>
<<<<<<< HEAD
          <Route path="/services" exact render={Services}></Route>
          <Route path="/events" exact render={Events}></Route>
          <Route path="/rent" exact render={Rent}></Route>
          <Route path="/ballet-pilates" exact render={BalletAndPilates}></Route>
          <Route path="/technic" exact render={TechnicalConsulting}></Route>
          <Route path="/about" exact render={About}></Route>
          <Route path="/contact" exact render={Contact}></Route>
=======
          <Route path="/contact" exact render={Contact}></Route>
          <Route path="/login" exact render={Login}></Route>
          <Route path="/register" exact render={Register}></Route>
>>>>>>> e72ed3f (adding register component to the application)
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
