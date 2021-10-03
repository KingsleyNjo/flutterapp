import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NextHome from "./components/NextHome";
import SignUpForm from "./components/SignUpForm";
import Login from "./components/Login";
import WrongLogin from "./components/404";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/nexthome' exact={true} component={NextHome} />
            <Route path='/signup' exact={true} component={SignUpForm} />
            <Route path='/login' exact={true} component={Login} />
            <Route path='/404' exact={true} component={WrongLogin} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
