import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

export default function Navbar() {
  const total = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="navbar">
      <Link to="/">Paradise Nursery</Link>
      <Link to="/plants">Plants</Link>
      <Link to="/about">About Us</Link>
      <Link to="/cart" className="cart-link">
        Cart{" "}
        {total > 0 && <span className="cart-badge">{total}</span>}
      </Link>
    </nav>
  );
}

