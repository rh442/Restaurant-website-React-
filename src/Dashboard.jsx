import React, { useState } from "react";
import {Link, Outlet} from 'react-router-dom'
import B_cube from "./img/Burger_cube.png"
import cartIcon from "./img/cart.webp"
import burger from "./img/hamMenu.png"

function App() {
  const [open,setOpen] = useState(false)
  return (  
    <div>
      <div className="flex flex-row  justify-between items-center px-[15px] py-[20px] bg-red-600 relative w-full border-b-[5px] border-red-950 border-solid">
      <img className="w-[60px] h-auto z-[1000]" src={B_cube} alt="logo"/>
      <ul  className={`options absolute top-full left-0 right-0 bg-red-600 list-none flex-col text-white z-[999] ${
        open ? "flex" : "hidden"
      }
        md:static md:flex md:flex-row md:justify-around md:w-[50%]  md:items-center md:gap-6 md:bg-transparent
      `}>
        <li className="md:border-t-[1px] border-b-[1px] border-solid border-yellow-200 text-yellow-400 px-[15px] py-[20px] m-0 text-[18px] cursor-pointer"><h2><Link className="text-yellow-400 no-underline visited:text-yellow-400"  to='/'>Home</Link></h2></li>
        <li className="md:border-t-[1px] border-b-[1px] border-solid border-yellow-200 text-yellow-400 px-[15px] py-[20px] m-0 text-[18px] cursor-pointer"><h2><Link className="text-yellow-400 no-underline visited:text-yellow-400"  to='menu'>Menu</Link></h2></li>
        <li className="md:border-t-[1px] border-b-[1px] border-solid border-yellow-200 text-yellow-400 px-[15px] py-[20px] m-0 text-[18px] cursor-pointer"><h2><Link className="text-yellow-400 no-underline visited:text-yellow-400" to='/about'>About</Link></h2></li>
        <li className="md:border-t-[1px] border-b-[1px] border-solid border-yellow-200 text-yellow-400 px-[15px] py-[20px] m-0 text-[18px] cursor-pointer"><h2><Link className="text-yellow-400 no-underline visited:text-yellow-400" to='/contact'>Contact</Link></h2></li>
      </ul>
      <div className="flex flex-row">   
      
        <Link to="/cart"><img className ="w-[60px] h-auto mt-0 p-0 cursor-pointer z-[1000] " src={cartIcon}alt="Cart"/></Link>
        <img onClick={()=>setOpen(!open)} className ="w-[40px] h-auto cursor-pointer z-[1000] hover:scale-[1.1] md:hidden" src={burger} alt="hamburger menu"/>
      </div>
        </div>
       
        <Outlet/>
    </div>
  );
}

export default App;