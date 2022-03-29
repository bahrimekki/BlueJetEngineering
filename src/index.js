import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Switch,
} from "react-router-dom";
import HomeV6 from "./components/home-v6";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import Error from "./components/error";

class Root extends Component {
    render() {
        return (
            <Router>
                <HashRouter basename="/">
                    <div>
                        <Switch>
                            <Route exact path="/" component={HomeV6} />
                            <Route path="/about" component={About} />
                            <Route path="/services" component={Services} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/*" component={Error} />
                        </Switch>
                    </div>
                </HashRouter>
            </Router>
        );
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById("bluejetengineering"));
