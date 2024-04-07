import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Items } from './Data';
import Product from './Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDeatils = ({cart,setCart}) => {

    const {id} = useParams();

     const [product ,setProduct] = useState({})
     const [relatedProducts ,setRelatedProducts] = useState([])

      useEffect(()=>{
        const filterProduct= Items.filter((product)=>product.id == id)
        // console.log(filterProduct)
             setProduct(filterProduct[0])

      // set reletedproduct
      const relatedProducts = Items.filter((amit)=>amit.category === product.category)

       setRelatedProducts(relatedProducts)
      },[id , product.category])


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
    <div>
     <div className='flex justify-center gap-20'>
      <img src={product.imgSrc}  className='  w-[350px] h-[350px]'     />

             <div>
             <h5 className="mt-24 text-2xl ">{product.title}</h5>
              <p className=" mt-2 mr-20">{product.description}</p>
              <div className="  flex justify-start mt-6 ml-3 items-center gap-4">
                <button className="bg-blue-600 p-2 w-20 rounded-lg">
                  {product.price} ₹
                </button>
                <button
             onClick={()=>addToCart(product.id,product.price,product.title,product.description ,product.imgSrc)}
            className="bg-yellow-400 p-2 rounded-lg">Add to cart</button>
              </div>
               </div>
     
     </div>
     
    </div>
  <Product cart={cart} setCart={setCart} Items={relatedProducts} />
   </>
  )
}

export default ProductDeatils
