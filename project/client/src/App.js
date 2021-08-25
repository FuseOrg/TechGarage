import { useState } from "react";
import "./App.css";
import Sidenav from "./components/Sidenav";
import SearchBar from "./components/SearchBar";
import FeatherIcon from "feather-icons-react";
import ToolList from "./components/ToolList";
import ToolHeader from "./components/Toolheader";


function App() {
  const [Toggle, setToggle] = useState(false);

  return (
    <div className="flex">
      <section>
        <Sidenav toggleActive={Toggle} />
      </section>
      <section className=" ml-0 md:ml-72 w-full h-screen">
        <div className="bg-white px-3 py-4 flex justify-between items-center ">
          <SearchBar />

          <div className="block md:hidden ml-3 cursor-pointer" onClick={() => setToggle(!Toggle)}>
            {Toggle ? (
              <FeatherIcon icon="x" size="24" />
            ) : (
              <FeatherIcon icon="menu" size="24" />
            )}
          </div>
        </div>
        <div className="px-8 py-8">
          <p className=" text-xl text-secondary">All Tools</p>

          <div className="tool-container">
            
            <ToolHeader/>

            <ToolList/>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
