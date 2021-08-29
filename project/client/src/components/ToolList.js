import Toolcard from "./Toolcard";
import Toolheader from "./Toolheader";
//import Data from "../data/data.json";

const ToolList = (props) => {
 
  return (
    <>
    
      <Toolheader title={props.title} />
      <div className="tools-list grid  gap-4 grid-cols-none md:grid-cols-2 xl:grid-cols-3">
        <Toolcard data={props.data}/>
      </div>
    </>
  );
};

export default ToolList;
