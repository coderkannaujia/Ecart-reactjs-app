import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  return (
    <>
    <div className="bg-white flex jusfirsttify-center h-full w-full items-start">
      <div className="bg-white h-full  w-[650px] p-4  rounded-xl ml-72   ">
        {
            cart.length==0 ?(
              <>
              <div className='text-center'>
                <h1 className="text-3xl font-semibold ">Your Cart is Empty</h1>
                <Link to={"/"} ><button className="bg-yellow-400 p-2 mt-2 rounded-md">Continue Shopping...</button></Link>
              </div>
              </>
                      ):
        
            cart.map((product) => {
          console.log(product);
          return (
            <>
              <div className="bg-white h-full border-2  w-[600px] p-4 rounded-xl ml-3 mb-4 ">
                <div className="flex justify-center gap-20 ">
                  <div>
                    <img
                      src={product.imgSrc}
                      alt="amitimage"
                      className="h-[200px] w-[200px]"
                    />
                  </div>

                  <div>
                    <h1 className="text-xl font-bold">{product.title}</h1>
                    <p>{product.description}</p>
                    <button className="bg-blue-600 p-3 mr-6 mt-8 rounded-xl">
                      {product.price} ₹
                    </button>
                    <button className="bg-yellow-400 p-3 rounded-xl">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div> 
            </>
          );
        })}
      </div>
    </div>



     {
          cart.length!=0 && (
            <div className="container text-center my-5" style={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center'
    
            }}>
              <button className=' bg-yellow-400 p-2  rounded-md '>CheckOut</button>
              <button onClick={()=>setCart("")} className='bg-red-600 p-2 ml-10 rounded-md'>Clear Cart</button>
            </div>
          )


         }
      
</>
  );
};

export default Cart;
