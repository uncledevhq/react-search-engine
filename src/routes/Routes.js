import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

// Pages
import Home from "../pages/HomePage";
import Search from "../pages/SearchPage";
import SearchTmp from "../pages/SearchTmp";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/(|search)" component>
          <Home />
        </Route>
        <Route exact path="/search/:term" component>
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
