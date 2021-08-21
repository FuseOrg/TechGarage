import FeatherIcon from "feather-icons-react";
import {useState} from "react"
const Menuitem = (props ) => {

    const {menu,submenu,iconName} = props
    const [active,setactive] = useState(false);

    return(

        <li onClick={()=>setactive(!active)}>
            <div className=" px-4 py-3 flex items-center text-primary hover:bg-primary hover:text-secondary rounded-xl text-lg relative cursor-pointer">
              <div className="icon mr-5">
                <FeatherIcon icon={iconName} size="24" />
              </div>
              <span>{menu}</span>
              {submenu && submenu.length>0? 
              (<FeatherIcon
                icon="chevron-down"
                className="absolute right-2"
                size="24"
              />):null}
            </div>
            {submenu && submenu.length>0?
            (
            <ul className={`ml-12 submenu border-l pl-3 ${ active? 'active': ' ' }`}>
            {
                submenu.map((item,index)=>(
                    <li key={index} className="px-4 py-3 flex items-center text-primary hover:bg-primary hover:text-secondary rounded-xl text-sm relative cursor-pointer">{item.name}</li>
                ))
            }    
              

            </ul>
            ):null 
}
          </li>
    )
}

export default Menuitem