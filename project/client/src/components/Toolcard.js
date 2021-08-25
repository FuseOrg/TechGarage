import toolLogo from "../assets/toollogo.png";

const Toolcard = ()=>{
    return (
        <div className="bg-white flex px-4 py-4 rounded-xl shadow-lg">
                <img src={toolLogo} alt="logo" />
                <div className="tool-details flex flex-col justify-between flex-1 ml-2">
                  <p className="mb-2 text-base text-secondary font-semibold ">Mastodn</p>
                  <div className="tool-desc flex  justify-between">
                    <span className="text-sm text-primary">Stock Images</span>
                    <button className="text-buttonColor text-sm">View</button>   
                  </div>
                </div>
              </div>
    )
}

export default Toolcard;