import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Reset from "./components/Reset";
import { useSelector } from "react-redux";

function App() {
  const countData = useSelector((state) => state.count)
  return (
    <div className = "mainContainer">
      <h1>{countData}</h1>
      <div className = "buttonContainer">
        <Increment />
        <Decrement />
        <Reset />
      </div>
    </div>
  )
}
export default App;