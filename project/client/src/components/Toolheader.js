
const Toolheader = (props) => {
 const {title,link} = props
  return (
    <div className="tool-header flex justify-between mt-5 mb-4">
      <p className="tool-title text-lg text-secondary font-semibold ">
        {title}
      </p>
      <button className="text-primary text-sm font-semibold hover:text-indigo-300">
       <a href={link}> View All</a>
      </button>
    </div>
  );
};

export default Toolheader;
