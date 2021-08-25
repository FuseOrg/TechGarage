
import logo from "../assets/briefcase.svg";
import "./Sidenav.css";
//import FeatherIcon from "feather-icons-react"
import Menuitem from '../components/Menuitem'



const Sidenav = (props) => {
  


  const MenuItems = [
    { menu:'Dashboard',icon:'home'},
    {
      menu:'Categories',subMenu:[{name:'Images'},{name:'Videos'},{name:'Icons'}],icon:'grid'
    },
   
]

 

  return (
    <div className={`w-72 absolute bg-white h-full font-sans md:fixed z-50  sidenav ${props.toggleActive?'active':''}`}>
      <div className="sidenav-header p-4 mb-3 flex items-center">
        <img src={logo} alt="logo" className="logo mr-3" />
        <div className="title">
               Prodct Name
        </div>
      </div>
      <div className="sidenav-list">
        <ul className="px-4">
          {
            MenuItems.map((items,index)=>(<Menuitem key="index" menu={items.menu} submenu={items.subMenu || [] } iconName={items.icon}/>))
          }
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
