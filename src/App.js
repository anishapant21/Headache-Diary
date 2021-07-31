import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import History from "./Components/History";
import Insights from "./Components/Insights";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/history">
          <Navbar />
            <History />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/insights">
          <Navbar />
            <Insights />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/">
            <Navbar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
