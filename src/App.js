import "./App.css";
import { useState } from "react";
import logo from "./vector.png";

const App = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  return (
    <div>
      <header>
        <img src={logo} alt="" />
        <h1>Ready To Go</h1>
      </header>
      <main>
        <div className="button">
          <div className="ON">
            <button
              className={switch1 === true ? "purple" : "white"}
              onClick={() => {
                setSwitch1(true);
              }}
            >
              ON
            </button>
            <button
              className={switch2 === true ? "purple" : "white"}
              onClick={() => {
                setSwitch2(true);
              }}
            >
              ON
            </button>
            <button
              className={switch3 === true ? "purple" : "white"}
              onClick={() => {
                setSwitch3(true);
              }}
            >
              ON
            </button>
          </div>
          <div className="OFF">
            <button
              className={switch1 === false ? "purple" : "white"}
              onClick={() => {
                setSwitch1(false);
              }}
            >
              OFF
            </button>
            <button
              className={switch2 === false ? "purple" : "white"}
              onClick={() => {
                setSwitch2(false);
              }}
            >
              OFF
            </button>
            <button
              className={switch3 === false ? "purple" : "white"}
              onClick={() => {
                setSwitch3(false);
              }}
            >
              OFF
            </button>
          </div>
        </div>
        <div className="ready">
          <div
            className={
              switch1 === true && switch2 === true && switch3 === true
                ? "green"
                : "red"
            }
          >
            <span>
              {switch1 === true && switch2 === true && switch3 === true
                ? "GO!"
                : "No Way!"}
            </span>
          </div>
        </div>
      </main>
      <footer>
        Made with <span className="footer">React</span> at Le Reacteur by
        <span className="footer"> Phil-dev8</span>
      </footer>
    </div>
  );
};

export default App;
