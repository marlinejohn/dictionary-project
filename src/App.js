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
          <small>Coded by Marline John</small>
        </footer>
      </div>
    </div>
  );
}
