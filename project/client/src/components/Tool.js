import "./ToolCard.css";

const Tool = ({data}) => {
  return data.map((item, index) => (
    <a href={item.link} rel="noreferrer" target="_blank"
      className="bg-white flex  flex-col   rounded-xl  cursor-pointer hover:shadow-xl transition-shadow duration-200 ease-in-out border border-gray-200"
      key={index}
    >
      <div className="img_container  flex items-center justify-center">
        <img src={item.logo} alt="logo" className="rounded-xl" />
      </div>

      <div className="tool-details flex flex-col w-full py-3 px-3  text-center">
        <p className="mb-2 text-lg text-secondary font-medium ">
          {item.title}
        </p>
        <p className="text-base text-secondary mb-2 font-medium opacity-60">{item.desc}</p>
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
