import "../style/header.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from "react-redux";
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const count = useSelector((state) => state.count);
  const price = useSelector((state) => state.price);
  return (
    <header>
      <div className="logo">
        <img src="../src/assets/APSDark-BHi096m8.png" alt="logo" />
        <h3>Simply Natural</h3>
      </div>
      <nav>
        <p className="home">Home</p>
        <p className="aboutUs">About Us</p>
        <p className="contactUs">Contact Us</p>
        <div className="cart">
          <p>{`$${price}.00`}</p>
          <ShoppingCartOutlinedIcon className="cartIcon"></ShoppingCartOutlinedIcon>
          <span className={count>0?"badge":"noBadge"}>{count>0 && count}</span>
        </div>
        <MenuIcon className="burgerMenu"></MenuIcon>
      </nav>
    </header>
  )
}

export default Header;