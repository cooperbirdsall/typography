import "./App.css";
import React, { useState } from "react";

function App() {
  const [serifToggle, setSerifToggle] = useState(false);

  return (
    <div className="App">
      <h1>Typography</h1>
      <h3>cooperbirdsall.com/typography</h3>
      <div className="container">
        <h2>Introduction</h2>
      </div>
      <div className="container">
        <h2>Typefaces vs. Fonts</h2>
        <h3>Who cares?</h3>
        <div className="example">
          <p id="helv1">Helvetica</p>
          <p id="helv2">Helvetica Light</p>
          <p id="helv3">Helvetica Oblique</p>
          <p id="helv4">Helvetica Bold</p>
          <p id="helv5">Helvetica Bold Oblique</p>
        </div>
      </div>
      <div className="container">
        <h2>Serifs</h2>
        <div className="example example-serif-box">
          <p  id={serifToggle ? "example-serif" : "example-sans-serif"}>
            look at me I'm visualizing information
          </p>
        </div>
        <button onClick={() => {setSerifToggle(!serifToggle)}}>
        Toggle
        </button>
      </div>
      <div className="container">
        <h2>Spacing</h2>
        <div id="double">
          <div className="spacing-container">
            <h3>Letter Spacing</h3>
            <div className="example">
              <p id="letter-spacing">Brown's main campus comprises 235 buildings and 143 acres (0.58 km2)
              in the East Side neighborhood of College Hill. The university's central
              campus sits on a 15-acre (6.1-hectare) block bounded by Waterman, Prospect,
              George, and Thayer Streets; newer buildings extend northward, eastward,
              and southward.</p>
            </div>
            <input type="range" min="10" max="250"></input>
          </div>
          <div className="spacing-container">
            <h3>Line Height</h3>
            <div className="example">
              <p id="line-spacing">Brown's main campus comprises 235 buildings and 143 acres (0.58 km2)
              in the East Side neighborhood of College Hill. The university's central
              campus sits on a 15-acre (6.1-hectare) block bounded by Waterman, Prospect,
              George, and Thayer Streets; newer buildings extend northward, eastward,
              and southward.</p>
            </div>
            <input type="range" min="10" max="250"></input>
          </div>
        </div>
      </div>
      <div className="container">
        <h2>Size</h2>
      </div>
      <div className="container">
        <h2>Font Pairing</h2>
      </div>
      <div className="container">
        <h2>Emphasis</h2>
      </div>
      <div className="container">
        <h2>Contrast & Legibility</h2>
      </div>
      <div className="container">
        <h2>Additional Resources</h2>
      </div>
    </div>
  );
}

export default App;
