import {useState} from "react"
import './App.css';
import Sidenav from './components/Sidenav';
import FeatherIcon from "feather-icons-react";

function App() {

  const [Toggle,setToggle] = useState(false)


  return (

    <div className="flex">
      <section>
        <Sidenav toggleActive = {Toggle}/>
      </section>
      <section className="bg-primary ml-0 md:ml-80 w-full h-screen">
          <div className="bg-white px-4 py-6 flex justify-between items-center">
                <div className="search-section relative inline-block">
                <input type="text" className="border-2 rounded-lg focus:outline-none focus:border-gray-100 pl-8 py-1 pr-3" placeholder="Search here"/>
                <FeatherIcon
                icon="search"
                className="absolute search-icon"
                size="20"
              />
                </div>

                <div className="block md:hidden" onClick={()=>setToggle(!Toggle)}>
               {Toggle?<FeatherIcon icon="x" size="24" />:<FeatherIcon icon="menu" size="24" />} 
                </div>
          </div>
          <div>
             Main section
          </div>
      </section>
    </div>
  )

}

export default App;
