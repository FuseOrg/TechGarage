import "./ToolCard.css";

const Tool = ({data}) => {
  return data.map((item, index) => (
    <a href={item.link} rel="noreferrer" target="_blank"
      className="bg-white flex  flex-col   rounded-md  cursor-pointer shadow-one   transform duration-700 ease-in-out  hover:scale-105"
      key={index}
    >
      <div className="img_container  flex items-center justify-center p-3">
        <img src={item.logo} alt="logo" className="rounded-tl-md rounded-tr-md" />
      </div>

      <div className="tool-details flex flex-col w-full py-3 px-3  text-left pb-5">
        <p className="mb-1 text-lg text-secondary font-medium ">
          {item.title}
        </p>
        <p className="text-base text-gray-900 mb-2 font-base opacity-60">{item.desc}</p>
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
