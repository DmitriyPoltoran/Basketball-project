import "./App.css";
import "./Photo.css";
import "./Moments.css";
import React from "react";
import ResultsTable from "./components/ResultsTable.js";
import PhotoTable from "./components/PhotoTable.js";
import GamesTable from "./components/GamesTable.js";
import moments1 from "./img/moment1.jpg";
import moments2 from "./img/moment2.jpg";
import moments3 from "./img/moment3.jpg";
import moments4 from "./img/moment4.jpg";
import moments5 from "./img/moment5.jpg";
import moments6 from "./img/moment6.jpg";


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
             <Link to="/moments" class="nav_link">ЛУЧШИЕ МОМЕНТЫ</Link>
         </nav>
     </div> 
  <hr/>

</div>
      <div>

        <div className="App">
          <section>
            <Switch>

              <Route path="/photo">
                <PhotoTable />
              </Route>

              <Route path="/results">
                <ResultsTable/>
              </Route>

              <Route path="/moments">
              <div class="block_teams">
        <div class="block_teams_stats">
            <img class="block_teams_stats_img" src={moments1}></img>
            <img class="block_teams_stats_img" src={moments2}></img>
        </div>
        <div class="block_teams_stats">
            <img class="block_teams_stats_img" src={moments3}></img>
            <img class="block_teams_stats_img" src={moments4}></img>
        </div>
        <div class="block_teams_stats">
            <img class="block_teams_stats_img" src={moments5}></img>
            <img class="block_teams_stats_img" src={moments6}></img>
        </div>
    </div>
              </Route>
             

              <Route path="/">
              <GamesTable/>
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