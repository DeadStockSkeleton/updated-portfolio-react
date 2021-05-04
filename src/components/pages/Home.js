import skull from "../../assets/skull.svg";
import skullLine from "../../assets/skullLine.svg";
import flameLine from "../../assets/flameLine.svg";
import flame from "../../assets/flame.svg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div id="home" class="section">
      <div class="svgContainer">
        <object class="flameLine">
          <embed id="flameLine" src={flameLine} />
        </object>
        <object class="flame">
          <embed id="flame" src={flame} />
        </object>
        <object class="skullLine">
          <embed id="skullLine" src={skullLine} />
        </object>
        <object class="skull">
          <embed id="skull" src={skull} />
        </object>
        <div class="text-container text-center">
        <h1 class="home-text text-light">DEADSTOCK</h1>
        <p class="text-light">portfolio</p>
      </div>
      </div>

      
    </div>
  );
}

export default Home;
