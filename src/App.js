import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NextHome from "./components/NextHome";
import Form from "./components/Form";
import Login from "./components/Login";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/nexthome' exact={true} component={NextHome} />
            <Route path='/signup' exact={true} component={Form} />
            <Route path='/login' exact={true} component={Login} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
