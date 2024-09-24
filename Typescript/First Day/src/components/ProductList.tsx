import { useContext, useEffect, useState } from "react";
import { Product } from "../ts/types";
import { productContext } from "../context/storeContext";

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const { state, dispatch } = useContext(productContext);

  useEffect(() => {
    // // function fetchProducts():void{
    // //     fetch('https://fakestoreapi.com/products')
    // //         .then(res => res.json())
    // //         .then(data => setProducts(data))
    // //         .catch(err => console.log(err.message));
    // // }

    async function fetchProducts(): Promise<void> {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log(data);
        dispatch({ type: "LOAD_PRODUCTS", payload: data });
      } catch (error: any) {
        console.log(error.message);
      }
    }

    fetchProducts();
  }, [dispatch]);
  console.log(state);
  return (
    <>
      <div className='container mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4'>Product List</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {state?.products?.map((product: any) => (
            <div
              key={product.id}
              className='border rounded-lg shadow-lg overflow-hidden'>
              <img
                src={product.image}
                alt={product.title}
                className='w-full h-64 object-cover'
              />
              <div className='p-4'>
                <h2 className='font-bold text-lg mb-2'>{product.title}</h2>
                <p className='text-gray-700 mb-2'>${product.price}</p>
                <p className='text-gray-600'>{product.description}</p>
                <div className='mt-4'>
                  <span className='inline-block bg-yellow-300 text-yellow-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide'>
                    {product.category}
                  </span>
                  <div className='mt-2 text-sm text-gray-600'>
                    Rating: {product.rating.rate} ({product.rating.count}{" "}
                    reviews)
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
