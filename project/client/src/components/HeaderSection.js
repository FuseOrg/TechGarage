import logo from '../assets/link.png'
import './HeaderSection.css'
const HeaderSection = (props) => {
    return (
      <header className="w-full bg-secondary py-4 mt-14">
         <div className="header_container flex flex-col justify-center items-center w-11/12 mx-auto text-white">
             <div className="image_conatiner">
                 <img src={logo} alt="logo"/>
             </div>
             <div className="header_description flex flex-col text-center">
                 <h1 className="text-2xl mb-1">Free Resources for Developers</h1>
                 <p className="text-md mb-4"> This is  a great place to start exploring  resources that are free to use.</p>
                 <input type="text" placeholder="Search" className="p-2 rounded-lg text-sm mb-4"/>
             </div>
         </div>
      </header>
    );
  };
  
  export default HeaderSection;
  