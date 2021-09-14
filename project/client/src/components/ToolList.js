import Tool from "./Tool";
import Toolheader from "./Toolheader";
//import Data from "../data/data.json";

const ToolList = (props) => {
 const {title,link,data} = props;
  return (
    <>
      <Toolheader title={title} link={link}/>
      <div className="tools-list grid  gap-4 grid-cols-none md:grid-cols-2 xl:grid-cols-3 mb-10 lg:mb-16">
        <Tool data={data}/>
      </div>
    </>
  );
};

export default ToolList;
