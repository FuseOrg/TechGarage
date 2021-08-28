import "./ToolCard.css";

const ToolCard = (props) => {
  return props.data.map((item, index) => (
    <div
      className="bg-white flex  flex-row  px-2 py-2 rounded-xl shadow-lg"
      key={index}
    >
      <div className="img_container w-2/12 sm:w-3/12 flex items-center justify-center">
        <img src={item.logo} alt="logo" className="" />
      </div>

      <div className="tool-details flex flex-col justify-between flex-1 w-full sm:w-9/12 ml-3">
        <p className="my-1 text-base text-secondary font-semibold ">
          {item.title}
        </p>
        <p className="text-sm text-secondary mb-2 text-limit">{item.desc}</p>
        <button className="text-primary text-sm font-semibold mb-2 text-right mr-2 hover:text-indigo-300">
          View
        </button>
      </div>
    </div>
  ));
};

export default ToolCard;
