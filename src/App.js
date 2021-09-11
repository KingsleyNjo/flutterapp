import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FooterContainer from './components/Footer/FooterContainer';
import Home from "./components/Home";
import NextHome from "./components/NextHome";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/nexthome' exact={true} component={NextHome}/>
          <Route path='/' />
          <Route path='/' />
        </Switch>
        <FooterContainer />
      </Router>
    </>
  );
}

export default App;
