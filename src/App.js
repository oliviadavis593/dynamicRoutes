import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import PoemPage from "./PoemPage";
import PoemListPage from "./PoemListPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          {/*<a href="/">Poem List</a>*/}
          <Link to="/">Poem List</Link>
        </nav>
        <header>
          <h1>William Setstatespear</h1>
        </header>
        <main>
          {/*<PoemListPage />*/}
          <Route exact path="/" component={PoemListPage} />
          {/*<Route component={(props) => {
            console.log([props.match])
            return <div />
          }}
          />*/}
          {/*<Route
          path='/poem/:poemId'
          component={(props) => {
            console.log(props.match)
            return <div />
          }}
         />*/}
          <Route path="/poem/:poemId" component={PoemPage} />
        </main>
        <footer>
          <p>© WilliamSetstatespear, 2018. All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;

/*========= Planning the route configuration (#1)========== */
//Number one:
//The homepage can be setup as a single Route component for the path /
//Number two:
//The poem pages are not as straightforward (we don't want to make a new component for every poem)
//It'd be better if we can store the poem list in a JS array & then only use one PoemPage component that can display any poem
//Number three:
//We don't want to add a Route instance for each poem as well
//It'd be better to add one Route instance & somewhow make it work for every poem
//Number four:
//There are no React Router Routes setup yet only <a> tags instead of Links
// There's also a component called PoemPage which isn't being used yet

/*========================================== */

/*======= The homepage (#1) ====== */
//#1
//Import Route
//Swap hard-coded PoemListPage instance for a Route to an exact path of /
//Make sure there is an exact prop to let the Route component know that we only want to show PoemListPage as the exact component
//App.js ===> PoemListPage.js

/*========================================== */

/*======= Using Link Components (#1) ====== */
//Navgiation without page reload:
//We'll change all instances of <a> to use Link from react-router-dom
//1st we can swap a in App.js inside <nav>
//App.js ===> PoemListPage.js
