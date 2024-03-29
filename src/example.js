import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Card from "./components/Card";
import BottomBar from "./components/BottomBar";
import "./AppStyles.css";
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div className="app">
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul> */}

        {/* <hr /> */}

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  const personDef = {
    name: {
      first: "Jason",
      last: "Joliet"
    },
    picture: {
      large: ""
    }
  };

  const [candidates, setCandidates] = useState([]);
  const skillDef = ["HTML/CSS", "AngularJS", "Java/Spring", "Git"];
  const removeCandidate = user => {
    let upd = [...candidates];
    upd.push(user);
    setCandidates(upd);
  };

  return (
    <div className="row app" style={{ flex: 1 }}>
      <Card style={{ flex: 1 }} color="" skills={skillDef} person={personDef} />
      <Card style={{ flex: 1 }} color="" onHover onClick={removeCandidate} />
      <BottomBar candidateList={candidates} />
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
