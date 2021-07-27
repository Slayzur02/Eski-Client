import { ChessBoard, Header, Game, HeroPage, LogIn, SignUp} from "./components";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      
      <Switch>
        <Route exact path="/test">
          <Header active = {1}/>
          <div className="bg-blue-400 w-full text-center">
            <ChessBoard sideLength={70} />
            <Game />
          </div>
        </Route>
        <Route exact path = "/log-in">
          <Header active = {2}/>
          <LogIn/>
        </Route>
        <Route exact path = "/sign-up">
          <Header active = {2}/>
          <SignUp/>
        </Route>
        <Route path = "/">
          <Header active = {0}/>
          <HeroPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
