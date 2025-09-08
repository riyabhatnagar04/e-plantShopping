import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";
import "./CartItem.css";

const CartItem = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // safely parse cost (supports number or string like "$10")
  const parsePrice = (cost) => {
    if (typeof cost === "number") return cost;
    if (typeof cost === "string") {
      const cleaned = cost.replace(/[^0-9.-]+/g, "");
      return parseFloat(cleaned) || 0;
    }
    return 0;
  };

  const calculateTotalAmount = () => {
    return items.reduce((acc, item) => {
      const price = parsePrice(item.cost);
      return acc + price * item.quantity;
    }, 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, amount: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, amount: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item, index) => {
            const price = parsePrice(item.cost);
            const subtotal = price * item.quantity;

            return (
              <div key={index} className="cart-card">
                <img src={item.image} alt={item.name} width="100" />
                <h3>{item.name}</h3>
                <p>Unit Price: ${price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: ${subtotal.toFixed(2)}</p>
                <button onClick={() => handleIncrement(item)}>+</button>
                <button onClick={() => handleDecrement(item)}>-</button>
                <button onClick={() => handleRemove(item)}>Delete</button>
              </div>
            );
          })}
          <h3>Total: ${calculateTotalAmount().toFixed(2)}</h3>
          <button onClick={() => alert("Continue Shopping")}>
            Continue Shopping
          </button>
          <button onClick={() => alert("Checkout functionality coming soon!")}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartItem;