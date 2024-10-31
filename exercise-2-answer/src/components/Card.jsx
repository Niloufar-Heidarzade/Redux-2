import "../style/card.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Tooltip from '@mui/material/Tooltip';
import ButtonBase from '@mui/material/ButtonBase'; 
import { useDispatch } from "react-redux";
import { add } from "../redux/actions/actionCreators";
import { useSnackbar } from 'notistack';

function Card({type , name , stars , price , offPrice , src}) {
  const dispatch = useDispatch();
  const itemPrice = parseFloat(offPrice ? offPrice : price);
  const { enqueueSnackbar } = useSnackbar();
  
  return(
    <div className="card">
      <Tooltip title="Add to cart" arrow placement="left">
      <ButtonBase className="addToCart" onClick={() => {
        dispatch(add({price : itemPrice}));
        enqueueSnackbar('Plant added to basket shop!', { 
          variant: 'success', 
          anchorOrigin: { vertical: 'bottom', horizontal: 'left' } 
        });
     }}>
        <ShoppingBasketIcon className="addToCartIcon"/>
      </ButtonBase>
      </Tooltip>
      <img src={src}/>
      <div className="cardInfo">
      <p>{type}</p>
      <h4>{name}</h4>
      <div className="grade">
        <div className="fullStars">
          {
            Array.from({length : stars}).map((_) => (
               <StarIcon className="starIcon"/>
             ))
          }
        </div>
        <div className="emptyStars">
          {
            Array.from({length: 5-stars}).map((_) => (
              <StarBorderIcon className="starBorderIcon"/>
            ))
          }
        </div>
      </div>
      <div className="priceInfo">
      <p className={offPrice ? "oldPrice" : "priceOnly"}>{price}</p>
      <p className="offPrice">{offPrice && offPrice}</p>
      </div>
      </div>
      
    </div>
  )
}

export default Card;