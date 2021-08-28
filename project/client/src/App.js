import Navbar from "./components/Navbar";
//import FeatherIcon from "feather-icons-react";
import Leftnav from "./components/Leftnav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mainsection from "./components/Mainsection";
import "./App.css";
import HeaderSection from "./components/HeaderSection";



const Images = () => {
  return <h1>Images</h1>;
};

const Illustartion = () => {
  return <h1>Illustartions</h1>;
};

const Icons = () => {
  return <h1>Icons</h1>;
};

function App() {
  


  return (
    <Router>

      <Navbar />
      <HeaderSection/>

    

      <section className="flex py-3 w-11/12 mx-auto">
        <Leftnav />

        <Switch>
          <Route exact path={"/"}>

            <Mainsection/>
            
          </Route>
          <Route path={"/Images"}>
            <Images />
          </Route>
          <Route path={"/Illustartions"}>
            <Illustartion />
          </Route>
          <Route path={"/icons"}>
            <Icons />
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App;
