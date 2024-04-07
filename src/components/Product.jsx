import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Product = ({Items ,cart ,setCart}) => {

 const addToCart = (id,price,title ,description ,imgSrc)=>{
  const obj = {
      id,price,title ,description ,imgSrc
     }
     setCart([...cart ,obj]);
     console.log("cart element =",cart)
     toast.success('🦄 Item added to cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      });
 }


  return (
    <>
    <ToastContainer
          position="top-right"
         autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
         rtl={false}
        pauseOnFocusLoss
       draggable
       pauseOnHover
      theme="dark"
    
/>
    <div className="grid grid-cols-3 gap-4 mt-10 ml-28">
      {Items.map((product) => (
        <div key={product.id} className="bg-white w-[270px] h-[390px] p-4 border-2">
          <Link to={`/product/${product.id}`}>
            <img src={product.imgSrc} className="w-[250px] h-[200px]" />
          </Link>
          <h5 className="text-center mt-6">{product.title}</h5>
          <p className="text-sm mt-2">{product.description}</p>
          <div className="flex justify-start mt-6 ml-3 items-center gap-4">
            <button className="bg-blue-600 p-2 w-20 rounded-lg">
              {product.price.toString()} ₹
            </button>
            <button
             onClick={()=>addToCart(product.id,product.price,product.title,product.description ,product.imgSrc)}
            className="bg-yellow-400 p-2 rounded-lg">Add to cart</button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Product;







































































// import React from "react";

// import { Link } from "react-router-dom";

// const Product = ({items}) => {
//   return (
//     <div class="grid grid-cols-3  gap-4 mt-10 ml-28 ">
//       {items.map((product) => {
//         return (
//           <>
//             <div className="key={product.id} bg-white w-[270px] h-[390px] p-4 border-2 ">
//              <Link to={`/product/${product.id}`}>
//               <img src={product.imgSrc} className="w-[250px] h-[200px]" />
//               </Link>
//               <h5 className="text-center  mt-6 ">{product.title}</h5>
//               <p className="text-sm mt-2">{product.description}</p>
//               <div className="  flex justify-start mt-6 ml-3 items-center gap-4">
//                 <button className="bg-blue-600 p-2 w-20 rounded-lg">
//                   {product.price} ₹
//                 </button>
//                 <button className="bg-yellow-400 p-2 rounded-lg">Add to cart</button>
//               </div>
//             </div>

//           </>
//         );
//       })}
//     </div>
//   );
// };

// export default Product;

