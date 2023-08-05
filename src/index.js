import ReactDOM from "react-dom";
import Stories from "./Stories";
import Post from "./Post";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import FundoMobile from "./FundoMobile";
function App() {
  return (
    <>
      <NavBar img="./img/logo.png" />
      <div class="corpo">
        <div class="esquerda">
          <Stories />
          <Post />
        </div>
        <Sidebar />
      </div>
      <FundoMobile />
    </>
  );
}
const divRoot = document.querySelector(".root");
ReactDOM.render(<App />, divRoot);
