import React, {Component} from 'react';
import logo from './logo.svg';
import Header from "./Header";
import Footer from "./Footer";
import Program from "./pages/Program";
import Recipe from "./pages/Recipe";
import Registration from "./pages/Registration";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  state = {
    contacts: []
  }
  // componentDidMount() {
  //   fetch('http://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then((data) => {
  //     this.setState({ contacts: data })
  //     console.log(data)
  //   })
  //   .catch(console.log)
  // }
  render () {
    return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/program">
            <Program />
          </Route>
          <Route path="/recipe">
            <Recipe />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
  }
}

export default App;
