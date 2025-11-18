
import {React,useState,useEffect} from "react";

import cBurger from './img/chickenSlider.jpg'
import hBurger from './img/HamburgSlider.webp'
import soda from './img/soda.jpg'
import fry from './img/fries.jpg'
import nugg from './img/Chicken_Nuggets.jpg'

function Menu(){
    const [cart,setCart] = useState(()=>{
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    })
    const [popup,setPopup] = useState(false)
    useEffect(() => {
        // Store cart in localStorage whenever it changes
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    const addToCart=(name,price,qty,img)=>{
         setCart(prevCart => {
        const existingItem = prevCart.find(item => item.name === name);

        if (existingItem) {
            // If item exists → update qty
            return prevCart.map(item =>
                item.name === name
                    ? { ...item, qty: item.qty + 1 }
                    : item
            );
        }
        

        // If new → add item
        return [...prevCart, { name, price, qty, img }];
        
    });
      setPopup(true);
      setTimeout(() => setPopup(false), 1000);
      
    };

    return(
        <>
            
  <div className={`popup ${popup ? "block" : "hidden"} text-center bg-[#f0ffff] fixed z-[1000] top-[0] left-[0] w-full`}>
    <h3>Item added!</h3>
  </div>
  <div className="topic  mx-auto border-black border-[1px] mt-[10px] text-center  bg-yellow-400 rounded w-[50%] "><b><h1>Menu</h1></b></div>
  <br/>
  <div className="pricing-wrapper border-r-[10px] p-[10px]">
      <div className="pricing md:grid-cols-2 grid bg-[rgba(255,255,255,0.7)] border-[10px]">
        <div className="item md:col-auto hidden md:block col-span-full header m-0 p-[5px] border-solid border-black border-[1px] text-center"><b>Item</b></div>
        <div className="prices hidden  md:grid md:col-auto col-span-full   gap-4 [grid-template-columns:repeat(auto-fit,minmax(60px,1fr))] header m-0 p-[5px] border-solid border-black border-[1px] text-center">
            <div ><b>Prices</b></div>
        </div>
        <div className="item  md:col-auto col-span-full m-0 p-[5px] border-solid border-black border-[1px] text-center"><img className="w-full max-w-full h-auto block "src={hBurger} alt="HamSlider"/></div>
        <div className="prices  md:place-items-center md:col-auto col-span-full  grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(60px,1fr))] m-0 p-[5px] border-solid border-black md:border-[0px] border-r-[1px] text-center">
            <div className="flex flex-col border-l-[1px] border-solid border-black text-center md:border-x-[0px] border-r-[1px]">
            <div><b>$4.99</b></div>
            <button className="bg-red-700 rounded text-white mt-[10px]" onClick={()=>addToCart('Ham Slider',4.99,1,hBurger)}>Add Item</button>
            </div>
            <div className="flex flex-col border-l-[1px] border-solid border-black text-center md:border-x-[0px] border-r-[1px]">
              <div><b>S: $7.99</b></div>
               <button className="bg-red-700 rounded text-white mt-[10px]" onClick={()=>addToCart('Ham Slider Meal(S)',7.99,1,hBurger)}>Add Item</button>
            </div>
            <div className="flex flex-col border-l-[1px] border-solid border-black text-center md:border-x-[0px] border-r-[1px]">
              <div><b>M: $8.99</b></div>
              <button className="bg-red-700 rounded text-white mt-[10px]" onClick={()=>addToCart('Ham Slider Meal(M)',8.99,1,hBurger)}>Add Item</button>
            </div>
            <div className="flex flex-col border-l-[1px] border-solid border-black text-center md:border-x-[0px] border-r-[1px]">
              <div><b>L: $9.99</b></div>
              <button className="bg-red-700 rounded text-white mt-[10px]" onClick={()=>addToCart('Ham Slider Meal(L)',9.99,1,hBurger)}>Add Item</button>
            </div>
        </div>
      
      
        <div className="  md:col-auto col-span-full m-0 p-[5px] border-solid border-black border-[1px] text-center item"><img className="w-full max-w-full h-auto block " src={cBurger} alt="chickenSlider"/></div>
        <div className=" md:place-items-center md:col-auto col-span-full  grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(60px,1fr))] m-0 p-[1px] border-solid border-black border-[1px] text-center prices">
            <div className="flex flex-col border-l-[1px] border-solid border-black text-center md:border-x-[0px] border-r-[1px]">
              <div><b>$4.99</b></div>
              <button className="bg-red-700 rounded text-white mt-[10px]" onClick={()=>addToCart('Chicken Slider',4.99,1,cBurger)}>Add Item</button>
            </div>
            <div className="flex flex-col border-l-[1px] border-solid border-black text-center md:border-x-[0px] border-r-[1px]">
              <div><b>S: $7.99</b></div>
              <button className="bg-red-700 rounded text-white mt-[10px]" onClick={()=>addToCart('Chicken Slider Meal(S)',7.99,1,cBurger)}>Add Item</button>
            </div>
            <div className="flex flex-col border-l-[1px] border-solid border-black text-center md:border-x-[0px] border-r-[1px]">
              <div><b>M: $8.99</b></div>
              <button className="bg-red-700 rounded text-white mt-[10px]" onClick={()=>addToCart('Chicken Slider Meal(M)',8.99,1,cBurger)}>Add Item</button>
            </div>
            <div className="flex flex-col border-l-[1px] border-solid border-black text-center md:border-x-[0px] border-r-[1px]">
              <div><b>L: $9.99</b></div>
              <button className="bg-red-700 rounded text-white mt-[10px]" onClick={()=>addToCart('Chicken Slider Meal(L)',9.99,1,cBurger)}>Add Item</button>
            </div>
           
        </div>
        <div className="item  md:col-auto col-span-full m-0 p-[5px] border-solid border-black border-[1px] text-center"><img className="w-full max-w-full h-auto block " src={fry} alt="fries"/></div>
        <div className="prices md:place-items-center  md:col-auto col-span-full  grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(60px,1fr))] m-0 p-[1px] border-solid border-black border-[1px] text-center">
            <div className="flex flex-col border-l-[1px] border-solid border-black text-center md:border-x-[0px] border-r-[1px]">
              <div><b>S: $2.99</b></div>
              <button className="bg-red-700 rounded text-white mt-[10px]" onClick={()=>addToCart('Fries(S)',2.99,1,fry)}>Add Item</button>
            </div>
            <div className="flex flex-col border-l-[1px] border-solid border-black text-center md:border-x-[0px] border-r-[1px]">
              <div><b>M: $3.99</b></div>
              <button className="bg-red-700 rounded text-white mt-[10px]" onClick={()=>addToCart('Fries(M)',3.99,1,fry)}>Add Item</button>
            </div>
            <div className="flex flex-col border-l-[1px] border-solid border-black text-center md:border-x-[0px] border-r-[1px]">
              <div><b>L: $4.99</b></div>
              <button  className="bg-red-700 rounded text-white mt-[10px]" onClick={()=>addToCart('Fries(L)',4.99,1,fry)}>Add Item</button>
            </div>
        </div>
        <div className="item  md:col-auto col-span-full m-0 p-[5px] border-solid border-black border-[1px] text-center"><img className="w-full max-w-full h-auto block " src={nugg} alt="Chicken_Nuggets"/></div>
        <div className="prices md:place-items-center  md:col-auto col-span-full  grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(60px,1fr))] m-0 p-[1px] border-solid border-black border-[1px] text-center">
            <div className="border-l-[1px] border-solid border-black text-center flex flex-col  md:border-x-[0px] border-r-[1px]">
              <div><b>4pc: $3.99</b></div>
              <button className="bg-red-700 rounded text-white mt-[10px]" onClick={()=>addToCart('Nuggets(4)',3.99,1,nugg)}>Add Item</button>
            </div>
            <div className="flex flex-col border-l-[1px] border-solid border-black text-center md:border-x-[0px] border-r-[1px]">
              <div><b>6pc: $4.99</b></div>
              <button className="bg-red-700 rounded text-white mt-[10px]" onClick={()=>addToCart('Nuggets(6)',4.99,1,nugg)}>Add Item</button>
            </div>
            <div className="flex flex-col border-l-[1px] border-solid border-black text-center md:border-x-[0px] border-r-[1px]">
              <div><b>10pc: $5.99</b></div>
              <button className="bg-red-700 rounded text-white mt-[10px]" onClick={()=>addToCart('Nuggets(10)',5.99,1,nugg)}>Add Item</button>
            </div>
        </div>
        <div className="item  md:col-auto col-span-full m-0 p-[5px] border-solid border-black border-[1px] text-center"><img className="w-full max-w-full h-auto block " src={soda} alt="soda"/></div>
        <div className="prices md:place-items-center  md:col-auto col-span-full  grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(60px,1fr))] m-0 p-[1px] border-solid border-black border-[1px] text-center">
            <div className="flex flex-col border-l-[1px] border-solid border-black text-center md:border-x-[0px] border-r-[1px]">
              <div><b>All Sizes: $0.99</b></div>
              <button className="bg-red-700 rounded text-white mt-[10px]"onClick={()=>addToCart('Soda',0.99,1,soda)}>Add Item</button>
            </div>
            </div>
        </div>
        </div>
    
 
  
    


        </>
    )
}
export default Menu