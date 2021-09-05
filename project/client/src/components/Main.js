import {  Switch, Route } from "react-router-dom";
import Leftnav from "../components/Leftnav";
import Mainsection from "../components/Mainsection";
import Images from "../Pages/Images";
import Illustrations from "../Pages/Illustrations";
import Icons from "../Pages/Icons";

const Main = () => {
 
  return (
    <section className="flex py-3 w-11/12 mx-auto">
    <Leftnav />

    <Switch>
      <Route exact path={"/"}>
        <Mainsection />
      </Route>

      <Route path={"/Images"}>
        <Images />
      </Route>
      <Route path={"/Illustrations"}>
        <Illustrations />
      </Route>
      <Route path={"/Icons"}>
        <Icons />
      </Route>
    </Switch>
  </section>
  );
};

export default Main;
