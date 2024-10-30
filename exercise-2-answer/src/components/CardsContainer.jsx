import "../style/cardsContainer.css";
import Card from "./Card";
import data from "../assets/data.json";
import { SnackbarProvider } from 'notistack';

function CardsContainer() {
  return (
    <section className="cardContainer">
      <SnackbarProvider maxSnack={3}>
      {
        data.map((item , index) => {
          return (
            <Card key={index} {...item}/>
          )
        })
      }
      </SnackbarProvider>
    </section>
  )
}
export default CardsContainer;