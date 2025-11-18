import {React,useEffect,useState} from "react";

function Cart(){
    const [cart, setCart] = useState(() => {
  return JSON.parse(localStorage.getItem("cart")) || [];
});
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

function increaseQty(index) {
  setCart(prev => {
    const newCart = [...prev];
    newCart[index].qty += 1;
    return newCart;
  });
}

function decreaseQty(index) {
  setCart(prev => {
    const newCart = [...prev];

    if (newCart[index].qty > 1) {
      newCart[index].qty -= 1;
    } else {
      newCart.splice(index, 1);
    }
    return newCart;
  });
}
function ClearCart() {
  setCart([]);
}

    return (
        <>
            <div className="clear mr-[30px] mt-[20px] mb-[20px] ml-[80vw] w-[20vw] text-center">
                <button className="w-auto h-auto  border-[1px] border-solid border-black text-white rounded cursor-pointer bg-red-500"onClick={ClearCart}>Clear Cart</button>
            </div>
            <div className="main_container">
                <ul className="shopping_cart"></ul>
            </div>
            <div className="cart-container">

    {cart.length === 0 ? (
      <div className="empty-msg bg-white text-center text-xl">Your cart is empty</div>
    ) : (
      <>
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item border-b-[2px] border-red-950 border-solid flex flex-row justify-between items-center bg-white">
              <img className="w-[20vw]"src={item.img} alt={item.name} />

              <div>{item.name}</div>
              <div>${item.price}</div>

              <div className="quantity mr-[20px] flex flex-row gap-[10px]">
                <button 
                  onClick={() => decreaseQty(index)}
                >➖</button>

                <span>Qty: {item.qty}</span>

                <button 
                  onClick={() => increaseQty(index)}
                >➕</button>
              </div>
            </li>
          ))}
        </ul>

        <div className="checkout text-center mr-[30px] mt-[20px] bg-white rounded w-[20vw] ml-[70vw] mb-[20px] border-solid border-red-600 border-[5px]">
          Total: ${cart.reduce((t,i) => t + i.price * i.qty, 0).toFixed(2)}
        </div>
      </>
    )}

  </div>
        </>
    )
}
export default Cart