import React from "react";
import Navbar from "./components/Navbar/navbar";
import Banner from "./components/Banner/banner";
import Rowpost from "./components/Row_Post/row_post";
import "./app.css"
import { originals,actions,horror,comedy,documentaries,romance } from "./urls";

function App() {
  return <div className="App">
        <Navbar />
        <Banner />
        <Rowpost title="Netflix Orginals" url={originals} />
        <Rowpost title="Action Movies" url={actions} isSmall />
        <Rowpost title="Horror Movies" url={horror} isSmall/>
        <Rowpost title="Comedy Movies" url={comedy}isSmall />
        <Rowpost title="Documentaries" url={documentaries} isSmall />
        <Rowpost title="Romance Movies" url={romance} isSmall />





      </div>
}

export default App;
