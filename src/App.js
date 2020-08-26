import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Tracks from "./components/Tracks";
import Search from "./components/Search";
import Lyrics from "./components/Lyrics";
import { GlobalProvider } from "./context/Globalstate";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <GlobalProvider>
        <Header />
        <Router>
          <Switch>
            <div className="container">
              <div className="App">
                <Route exact path="/" component={Search} />
                <Route exact path="/" component={Tracks} />
                <Route exact path="/details" component={Lyrics} />
              </div>
            </div>
          </Switch>
        </Router>
      </GlobalProvider>
    );
  }
}

export default App;
