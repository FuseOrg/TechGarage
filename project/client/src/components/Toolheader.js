const Toolheader = (props) => {
  return (
    <div className="tool-header flex justify-between mt-5 mb-4">
      <p className="tool-title text-lg text-secondary font-semibold ">
        {props.title}
      </p>
      <button className="text-primary text-sm font-semibold hover:text-indigo-300">
        View All
      </button>
    </div>
  );
};

export default Toolheader;
