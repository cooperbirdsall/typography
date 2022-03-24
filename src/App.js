import "./App.css";
import React, { useState } from "react";

function App() {
  const [serifToggle, setSerifToggle] = useState(false);
  const [letterSpacing, setLetterSpacing] = useState("0");
  const [lineHeight, setLineHeight] = useState("120");
  const [sizingValue, setSizing] = useState("18");
  const [lightness, setLightness] = useState("5");
  const [headerClass, setHeaderClass] = useState("pairingHeader1");
  const [bodyClass, setBodyClass] = useState("pairingBody1");
  const [emphasisClass, setEmphasisClass] = useState("pairingBody1");

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
              <p id="letter-spacing" style={{letterSpacing: `${letterSpacing}em`}}>Brown's main campus comprises 235 buildings and 143 acres (0.58 km2)
              in the East Side neighborhood of College Hill. The university's central
              campus sits on a 15-acre (6.1-hectare) block bounded by Waterman, Prospect,
              George, and Thayer Streets; newer buildings extend northward, eastward,
              and southward.</p>
            </div>
            <input name="spacing" type="range" value={letterSpacing} min="-0.3" step="0.01" max="0.5"
            onChange={(event) => {
              setLetterSpacing(event.target.value);
            }}></input>
            <label for="spacing">{letterSpacing} em</label>
          </div>
          <div className="spacing-container">
            <h3>Line Height</h3>
            <div className="example">
              <p id="line-spacing" style={{lineHeight: `${lineHeight}%`}}>Brown's main campus comprises 235 buildings and 143 acres (0.58 km2)
              in the East Side neighborhood of College Hill. The university's central
              campus sits on a 15-acre (6.1-hectare) block bounded by Waterman, Prospect,
              George, and Thayer Streets; newer buildings extend northward, eastward,
              and southward.</p>
            </div>
            <input name="height" type="range" value={lineHeight} step="1" min="1" max="250"
            onChange={(event) => {
              setLineHeight(event.target.value);
            }}></input>
            <label for="height">{lineHeight} %</label>
          </div>
        </div>
      </div>
      <div className="container">
        <h2>Size</h2>
        <div className="example">
          <p id="sizing" style={{fontSize: `${sizingValue}px`}}>It takes a bear to catch a thief!
          Paddington, now happily settled with the Browns, picks up a series of odd jobs
          to buy the perfect present for his Aunt Lucy, but it is stolen.</p>
        </div>
        <input name="sizing" type="range" value={sizingValue} min="5" step="1" max="28"
        onChange={(event) => {
          setSizing(event.target.value);
        }}></input>
        <label for="sizing">{sizingValue} px</label>
      </div>
      <div className="container">
        <h2>Font Pairing</h2>
        <div className="example example-serif-box">
          <p className={headerClass}>
          Very Important Header
          </p>
          <p className={bodyClass}>
          This is some body text. But is it less important?
          </p>
        </div>
        <div class="button-container">
          <button onClick={() => {
            setBodyClass("pairingBody1");
            setHeaderClass("pairingHeader1");
          }}>0</button>
          <button onClick={() => {
            setBodyClass("pairingBody2");
            setHeaderClass("pairingHeader2");
          }}>1</button>
          <button onClick={() => {
            setBodyClass("pairingBody3");
            setHeaderClass("pairingHeader3");
          }}>2</button>
        </div>
      </div>
      <div className="container">
        <h2>Emphasis</h2>
        <div className="example example-serif-box">
          <p id="emphasis-normal">Oh jeez, I <span className={emphasisClass}>wish</span>  I knew which word was important :/</p>
        </div>
        <div class="button-container">
          <button onClick={() => {setEmphasisClass("emphasis1")}}>
          0
          </button>
          <button onClick={() => {setEmphasisClass("emphasis2")}}>
          1
          </button>
          <button onClick={() => {setEmphasisClass("emphasis3")}}>
          2
          </button>
          <button onClick={() => {setEmphasisClass("emphasis4")}}>
          3
          </button>
        </div>
        <div class="button-container">
          <button onClick={() => {setEmphasisClass("emphasis5")}}>
          4
          </button>
          <button onClick={() => {setEmphasisClass("emphasis6")}}>
          5
          </button>
          <button onClick={() => {setEmphasisClass("emphasis7")}}>
          6
          </button>
          <button onClick={() => {setEmphasisClass("emphasis8")}}>
          7
          </button>
        </div>
      </div>
      <div className="container">
        <h2>Contrast & Legibility</h2>
        <div className="example dark-background">
          <p id="legibility" style={{color: `hsl(233, 100%, ${lightness}%)`}}>I want everyone in the world to be able to see this</p>
        </div>
        <input type="range" name="lightness" value={lightness} step="5" min="5" max="100"
        onChange={(event) => {
          setLightness(event.target.value);
        }}></input>
        <label for="lightness">hsl(233, 100%, {lightness}%)</label>
      </div>
      <div className="container">
        <h2>Additional Resources</h2>
        <a href="https://www.getstark.co/">Stark</a>
        <a href="https://fonts.google.com/">Google Fonts</a>
        <a id="bottom" href="https://practicaltypography.com/">Practical Typography</a>
      </div>
    </div>
  );
}

export default App;
