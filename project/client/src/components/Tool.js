import "./ToolCard.css";

const Tool = ({data}) => {
  return data.map((item, index) => (
    <a href={item.link} rel="noreferrer" target="_blank"
      className="bg-white flex  flex-col  px-2 py-2 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200 ease-in-out"
      key={index}
    >
      <div className="img_container  flex items-center justify-center mb-3 ">
        <img src={item.logo} alt="logo" className="rounded-xl" />
      </div>

      <div className="tool-details flex flex-col w-full   text-center">
        <p className="mb-2 text-base text-secondary font-semibold ">
          {item.title}
        </p>
        <p className="text-sm text-secondary mb-2">{item.desc}</p>
        {/* <div className="w-full flex justify-end  pr-2">
        <button className="text-primary text-sm font-semibold  hover:text-indigo-300">
         
          <a href={item.link} rel="noreferrer" target="_blank">View</a>
         
        </button>
        </div> */}
       
      </div>
    </a>
  ));
};

export default Tool;
