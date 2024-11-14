import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useState, useEffect } from "react";

export const Card = ({ product }) => {
  const { handleAddToCart, handleRemoveFromCart, cartItem } = useCart();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = cartItem.find((item) => item.id === product.id);
    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartItem, product.id]);

  return (
    <div className="flex flex-col items-center w-full max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <Link to="/" className="w-full aspect-square overflow-hidden rounded-lg">
        <img
          className="object-contain w-full h-full p-4"
          src={product.image_src}
          alt={product.title}
        />
      </Link>
      <div className="w-full mt-4 px-2 pb-4 text-center">
        <Link to="/">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900">{product.title}</h5>
        </Link>
        <div className="flex items-center justify-center mt-2 space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < product.rating ? "text-yellow-300" : "text-gray-200"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.67a1 1 0 00.95.69h4.908c.967 0 1.371 1.24.588 1.81l-3.97 2.863a1 1 0 00-.36 1.118l1.518 4.67c.3.921-.755 1.688-1.54 1.118l-3.97-2.863a1 1 0 00-1.176 0l-3.97 2.863c-.784.57-1.838-.197-1.54-1.118l1.518-4.67a1 1 0 00-.36-1.118L2.455 9.097c-.784-.57-.379-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.67z" />
            </svg>
          ))}
          <span className="ml-2 text-blue-600 font-semibold text-xs bg-blue-100 px-2 py-0.5 rounded">
            {product.rating}
          </span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>

          {isInCart ? (
            <button
              onClick={() => handleRemoveFromCart(product)}
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
              Remove
            </button>
          ) : (
            <button
              onClick={() => handleAddToCart(product)}
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
