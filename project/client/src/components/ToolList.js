import Toolcard from "./Toolcard";
import Toolheader from "./Toolheader";
//import Data from "../data/data.json";

const ToolList = (props) => {
 const {title,link,data} = props;
  return (
    <>
    
      <Toolheader title={title} link={link}/>
      <div className="tools-list grid  gap-4 grid-cols-none md:grid-cols-2 xl:grid-cols-3">
        <Toolcard data={data}/>
      </div>
    </>
  );
};

export default ToolList;
