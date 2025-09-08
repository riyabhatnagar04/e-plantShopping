import { useSelector } from 'react-redux';
import CartItem from "./CartItem";
 // ✅ fixed path
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const items = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return items.reduce((sum, it) => sum + it.price * it.quantity, 0).toFixed(2);
  };

  const handleContinue = () => navigate('/plants');
  const handleCheckout = () => alert('Functionality to be added for future reference');

  if (items.length === 0) return (
    <div style={{padding:20}}>
      <h3>Your cart is empty</h3>
      <button onClick={handleContinue}>Continue Shopping</button>
    </div>
  );

  return (
    <div style={{padding:20}}>
      <h2>Cart ({totalQuantity} items)</h2>
      <div style={{display:'grid', gap:12}}>
        {items.map(it => <CartItem key={it.name} item={it} />)}
      </div>
      <div style={{marginTop:20}}>
        <h3>Total: ₹{calculateTotal()}</h3>
        <button onClick={handleContinue}>Continue Shopping</button>
        <button onClick={handleCheckout} style={{marginLeft:10}}>Checkout</button>
      </div>
    </div>
  );
}
