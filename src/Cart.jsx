import {React,useEffect,useState} from "react";
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const sessionId = 
  localStorage.getItem("sessionId") ||
  (() => {
    const id = crypto.randomUUID();
    localStorage.setItem("sessionId", id);
    return id;
  })();
function Cart(){
    const [cart, setCart] = useState([]);

    useEffect(() => {
      fetch(`${API_URL}/api/cart/${sessionId}`)
        .then(res => res.json())
        .then(data => setCart(data.items || []));
    }, []);


    function increaseQty(itemId) {
      fetch(`${API_URL}/api/cart/increase`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId,itemId })
      })
      .then(res => res.json())
      .then(data => setCart(data.items));
    }


    function decreaseQty(itemId) {
      fetch(`${API_URL}/api/cart/decrease`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId,itemId })
      })
      .then(res => res.json())
      .then(data => setCart(data.items));
    }

    function ClearCart() {
      fetch(`${API_URL}/api/cart/clear`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId })
      })
      .then(() => setCart([]));
    }

    return (
        <>
            <div className="clear mr-[30px] mt-[20px] mb-[20px] ml-[80vw] w-[20vw] text-center">
                <button className="w-auto h-auto  border-[1px] border-solid border-black text-white rounded cursor-pointer bg-red-500"onClick={ClearCart}>Clear Cart</button>
            </div>
            <div className="main_container">
                
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
                  onClick={() => decreaseQty(item._id)}
                >➖</button>

                <span>Qty: {item.qty}</span>

                <button 
                  onClick={() => increaseQty(item._id)}
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