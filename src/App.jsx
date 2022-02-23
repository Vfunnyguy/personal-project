import React from "react";
import Joke from "./component/Joke";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="App">
      <div className="banner_section">
        <div className="banner">
          <h1>
            A Joke a day keeps the doctor away <br />
          </h1>
          <p>If you joke wrong way,your teeth have to pay (Serious)</p>
        </div>
      </div>
      <div className="joke_section">
        <Joke/>
      </div>
      <section>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
