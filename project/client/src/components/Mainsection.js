import Data from "../data/data.json";
import ToolList from "../components/ToolList";
import './Mainsection.css'
const Mainsection = () => {

    
        const filterItem = (data, category) => {
          return data.filter((item, index) => {
            return item.Category === category;
          });
        };
      
        const arr1 = filterItem(Data, "Image").slice(0, 6);
        const arr2 = filterItem(Data, "Icon").slice(0, 6);

    return (
        <div className="right-side ">
        <p className=" text-xl text-secondary font-semibold">All Tools</p>

        <div className="tool-container">
          <ToolList title="Images" data={arr1} />
          <ToolList title="Icon" data={arr2} />
          <ToolList title="Fonts" data={arr2} />
        </div>
      </div>
    );
  };
  
  export default Mainsection;