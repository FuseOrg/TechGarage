import Data from "../data/data.json";
import Tool from "../components/Tool";
const Images = () => {

    
        const filterItem = (data, category) => {
          return data.filter((item, index) => {
            return item.Category === category;
          });
        };
      
        const arr1 = filterItem(Data, "Image");

    return (
        <div className="right-side ">
        <p className=" text-2xl lg:text-3xl text-secondary font-semibold mb-5">Images</p>

        <div className="tool-container">
        <div className="tools-list grid  gap-4 grid-cols-none md:grid-cols-2 xl:grid-cols-3">
        <Tool data={arr1} />
        </div>
        </div>
      </div>
    );
  };
  
  export default Images;