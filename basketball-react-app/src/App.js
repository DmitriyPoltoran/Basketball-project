import "./App.css";
import React from "react";
import ResultsTable from "./components/ResultsTable.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";

import moment from "moment";


function App() {
  return (
    <Router>
       <div class="header">
     
     <div class="header_inner">
         <div class="header_logo">PEACH</div>
         
         <nav class="nav">
             <Link to="/" class="nav_link"> ИГРЫ</Link>
             <Link to="/photo" class="nav_link">ФОТООТЧЕТ</Link>
             <Link to="/results" class="nav_link">РЕЗУЛЬТАТЫ</Link>
             <a class="nav_link" href="../basket/moments.html">ЛУЧШИЕ МОМЕНТЫ</a>
         </nav>
     </div> 
  <hr/>

</div>
      <div>

        <div className="App">
          <section>
            <Switch>

              <Route path="/photo">
                <Map />
              </Route>

              <Route path="/results">
                <ResultsTable/>
              </Route>

             

              <Route path="/">
                <h1>Home</h1>
                Welcome to our service. Please explore
              </Route>

              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </section>
        </div>
      </div>
    </Router>
  );
}
function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function Map() {
  let location = useLocation();

  return (
    <div>
      <h2>Map</h2>
      <p>Here is the description of the service and necessary terms.</p>
    </div>
  );
}




export default App;