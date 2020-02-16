import React from "react";
import POEMS from "./poems";
import { Link } from "react-router-dom";
export default function PoemListPage() {
  return (
    <>
      <p>Choose a poem from the list below.</p>
      <ul className="PoemList">
        {POEMS.map(poem => (
          <li key={poem.id}>
            {/*<a href={`/poem/${poem.id}`}>{poem.title}</a>*/}
            <Link to={`/poem/${poem.id}`}>{poem.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

/*======= The poem page (#1) ====== */
//Setting up dynamic path:
//Right now inside each instance of <li> we created an anchor element with dynamic href
//This is making an a for each of the poems inside the array of poems.js
//We want one Route component that can serve all of these paths
//How to do this:
//Put a Route in place with an anonymous component that logs its route match prop inside (App.js)
//The href for each poem a tag in the PoemListPage is made of the word poem & then poem.id
//The new Route we make needs to match up with these hrefs
//How to do this:
//Use a dynamic path route param for the poem id inside (App.js)
//Dynamic path has been added:
// the /poem part is fixed
// the /:poemId is a dynamic parth of the route param called poemId
//Chrome DevTools:
//If we click on an <a> tag inside viewport
// The broswer will navigate to the address of http://localhost:3000/poem/particular-poem
//This will match with Route we just added & trigger a console.log for props.match

/*======= The poem page (#2) ====== */
//Swapping anonymous component for the PoemPage:
//With the dynamic path setup - we can swap anon for Poempage
//How to do this:
//Import PoemPage (App.css)
//Swap the compoennt prop of the dynamic Route (App.js)
//PoemListPage.js ===> App.js

/*========================================== */

/*======= Using Link Components (#2) ====== */
//Navgiation without page reload:
//swap all <a> instances in PoemListPage.js
