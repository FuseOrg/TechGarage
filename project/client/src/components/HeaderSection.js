//import logo from '../assets/link.png'
import './HeaderSection.css'
const HeaderSection = (props) => {
    return (
      <header className="w-full bg-secondary py-4 lg:py-20 mt-14">
         <div className="header_container flex flex-col justify-center items-center sm:w-11/12 mx-auto ">
             {/* <div className="image_conatiner">
                 <img src={logo} alt="logo"/>
             </div> */}
             <div className="header_description flex flex-col text-center mx-5">
                 <h1 className="text-2xl lg:text-5xl mb-2 lg:mb-4 text-white">Free Resources for Everyone</h1>
                 <p className="text-sm lg:text-base mb-4 text-white"> This is  a great place to start exploring  resources that are free to use.</p>
                 
                 <input type="text" placeholder="Search" className="p-2 lg:p-4 rounded-lg text-sm mb-4"/>
             </div>
         </div>
      </header>
    );
  };
  
  export default HeaderSection;
  