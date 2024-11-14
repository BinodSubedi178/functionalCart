import { CartCard } from "../components";
import { useTitle } from "../hooks";
import { useCart } from "../contexts/CartContext";

export const Cart = () => {
  const { cartItem, totalPrice } = useCart();

  useTitle("Cart");

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        <h1 className="text-center text-3xl font-bold mb-8">Cart Summary</h1>
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <span className="text-lg font-semibold">Total Items: {cartItem.length}</span>
          <span className="text-lg font-semibold">{`Total: $${totalPrice}`}</span>
        </div>
        <div className="flex flex-wrap gap-6 justify-center items-stretch">
          {cartItem.map((product) => (
            <CartCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </main>
  );
};
