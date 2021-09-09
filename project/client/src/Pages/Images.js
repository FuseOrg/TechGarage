import Data from "../data/data.json";
import ToolList from "../components/ToolList";
const Images = () => {

    
        const filterItem = (data, category) => {
          return data.filter((item, index) => {
            return item.Category === category;
          });
        };
      
        const arr1 = filterItem(Data, "Image");

    return (
        <div className="right-side ">
        <p className=" text-xl text-secondary font-semibold">All Tools</p>

        <div className="tool-container">
          <ToolList title="Images" data={arr1} />
        </div>
      </div>
    );
  };
  
  export default Images;