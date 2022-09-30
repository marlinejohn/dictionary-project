import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <main>
            <Dictionary defaultKeyword="sunset" />
          </main>
        </header>
        <footer className="App-footer">
          <small>
            This project is coded by Marline John and is{" "}
            <a href="https://github.com/marlinejohn/dictionary-project">
              open sourced on GitHub
            </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}
