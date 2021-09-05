import Data from "../data/data.json";
import ToolList from "../components/ToolList";
import "./Mainsection.css";
const Mainsection = () => {
  const filterItem = (data, category) => {
    return data.filter((item, index) => {
      return item.Category === category;
    });
  };

  const arr1 = filterItem(Data, "Image").slice(0, 6);
  const arr2 = filterItem(Data, "Illustrations").slice(0, 6);
  const arr3 = filterItem(Data, "Icons").slice(0, 6);

  return (
    <div className="right-side ">
      <p className=" text-xl text-secondary font-semibold">All Tools</p>
      <div className="tool-container">
        <ToolList title="Images" link="/Images" data={arr1} />
        <ToolList title="Illustrations" link="/Illustrations" data={arr2} />
        <ToolList title="Icons" link="/Icons" data={arr3} />
      </div>
    </div>
  );
};

export default Mainsection;
