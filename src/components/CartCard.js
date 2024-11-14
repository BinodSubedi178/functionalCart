import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export const CartCard = ({ product }) => {
  const { handleRemoveFromCart } = useCart();

  return (
    <div className="flex items-center w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-lg">
        <img className="object-cover w-full h-full" src={product.image_src} alt={product.title} />
      </div>
      <div className="flex flex-col justify-between ml-4 w-full">
        <Link to="/cart">
          <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
        </Link>
        <p className="text-gray-600 font-medium mt-2">${product.price}</p>
        <button
          type="button"
          onClick={() => handleRemoveFromCart(product)}
          className="mt-4 w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2">
          Remove
        </button>
      </div>
    </div>
  );
};
