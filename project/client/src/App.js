import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeaderSection from "./components/HeaderSection";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  return (
    <Router>
      <Navbar />
      <HeaderSection />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
