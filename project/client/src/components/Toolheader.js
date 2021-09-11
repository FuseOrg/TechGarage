
const Toolheader = (props) => {
 const {title,link} = props
  return (
    <div className="tool-header flex justify-between mt-10 mb-4">
      <p className="tool-title text-2xl text-secondary font-semibold ">
        {title}
      </p>
      <button className="text-purple-500 text-base rounded-lg font-semibold px-3 transition ease-in delay-200  hover:bg-purple-200">
       <a href={link}> View All</a>
      </button>
    </div>
  );
};

export default Toolheader;
