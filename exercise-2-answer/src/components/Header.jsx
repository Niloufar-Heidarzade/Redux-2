import "../style/header.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector , useDispatch  } from "react-redux";
import { useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { openMenu } from "../redux/actions/actionCreators";

function Header() {
  const count = useSelector((state) => state.count);
  const price = useSelector((state) => state.price);
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state)=> state.openMenu);

  useEffect(() => {
    if (isMenuOpen) {
      const closeMenu = (event) => {
        if (!event.target.closest(".burgerMenuIcon")) {
          dispatch(openMenu(false));
        }
      };
      document.addEventListener("click", closeMenu);
      return () => {
        document.removeEventListener("click", closeMenu);
      };
    }
  }, [isMenuOpen]);
  
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
        <MenuIcon className="burgerMenuIcon" onClick={() => dispatch(openMenu(true))}></MenuIcon>
        <div className={isMenuOpen ? "burgerMenu" : "noBurgerMenu"}>
          <div className="buttons">
            <p className="home">Home</p>
            <p className="aboutUs">About Us</p>
            <p className="contactUs">Contact Us</p>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;