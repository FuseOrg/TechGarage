import "./Leftnav.css";
import categories from '../data/categories.json'

const Leftnav = () => {
  return (
    <div className="left-nav px-2 hidden lg:block">
      <span className="nav-title text-lg font-bold text-secondary pl-1 mb-3 block">Categories</span>
      <ul>
        {
            categories.map((item,index)=>(
                
                <li key={index} className="my-1 "><a className="text-base font-medium hover_list text-purple-500 hover:bg-purple-200 pointer block" href={item.link}>{item.category}</a></li>
            ))
        }
        
      </ul>
    </div>
  );
};

export default Leftnav;
