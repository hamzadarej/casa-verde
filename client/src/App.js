import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./sass/main.scss";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/footer/About";
import Services from "./components/Services";
import Shop from "./components/Shop/Shop";
import Events from "./components/Events";
import Rent from "./components/Rent";
import BalletAndPilates from "./components/BalletAndPilates";
import TechnicalConsulting from "./components/TechnicalConsulting";
import Footer from "./components/Footer";
import Contact from "./components/footer/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import { DataProvider } from "./components/Context";
function App() {
  return (
    <DataProvider>
      <Router
        state={{
          width: "100vw",
          height: "100v",
          display: "flex",
        }}
      >
        <Nav />
        <main>
          <p>
            <b>**Mobile page is under construction**</b>
          </p>
          <Switch>
            {/* Need to add public.env */}
            <Route path="/" exact render={Home}></Route>
            <Route path="/shop" exact component={Shop}></Route>
            <Route path="/services" exact render={Services}></Route>
            <Route path="/events" exact render={Events}></Route>
            <Route path="/rent" exact render={Rent}></Route>
            <Route
              path="/ballet-pilates"
              exact
              render={BalletAndPilates}
            ></Route>
            <Route path="/technic" exact render={TechnicalConsulting}></Route>
            <Route path="/about" exact render={About}></Route>
            <Route path="/contact" exact render={Contact}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/register" exact component={Register}></Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </DataProvider>
  );
}

export default App;
