import "./ToolCard.css";

const ToolCard = ({data}) => {
  return data.map((item, index) => (
    <div
      className="bg-white flex  flex-row  px-3 py-3 rounded-xl shadow-lg"
      key={index}
    >
      <div className="img_container  flex items-center justify-center">
        <img src={item.logo} alt="logo" className="" />
      </div>

      <div className="tool-details flex flex-col justify-between flex-1 w-full sm:w-9/12 pl-3">
        <p className="mb-2 text-base text-secondary font-semibold ">
          {item.title}
        </p>
        <p className="text-sm text-secondary mb-2 text-limit">{item.desc}</p>
        <div className="w-full flex justify-end  pr-2">
        <button className="text-primary text-sm font-semibold  hover:text-indigo-300">
         
          <a href={item.link} rel="noreferrer" target="_blank">View</a>
         
        </button>
        </div>
       
      </div>
    </div>
  ));
};

export default ToolCard;
