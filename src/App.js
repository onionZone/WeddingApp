import "./App.css";
import Header from "./components/Header.js";
import Navigation from "./components/Navigation.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        {<Header />}
        <nav>{<Navigation />}</nav>
      </header>
      <main>{<Content />}</main>
      <footer>{<Footer />}</footer>
    </Router>
  );
}

export default App;
