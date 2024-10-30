import "../style/heroSection.css";
import Header from "./header";
import Button from '@mui/material/Button';

function HeroSection() {
  return (
    <section className="heroContainer">
      <Header />
      <section className="heroAndEmpty">
      <section className="hero">
        <h6>Best Quality Plants</h6>
        <h2>Amazing Variety<br />Of Plants Starting<br />Just $12</h2>
        <Button className ="shopButton">SHOP NOW</Button>
      </section>
      <section className="emptySection"></section>
      </section>
      
    </section>
  )
}

export default HeroSection;