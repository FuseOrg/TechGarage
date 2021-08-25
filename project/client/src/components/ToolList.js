import Toolcard from "./Toolcard";

const ToolList = ()=>{
    return (
        <div className="tools-list grid  gap-5 grid-cols-none md:grid-cols-2 xl:grid-cols-3">
              
        <Toolcard/>

        <Toolcard/>

        <Toolcard/>

        <Toolcard/>

        <Toolcard/>

        <Toolcard/>

      </div>
    )
}

export default ToolList;