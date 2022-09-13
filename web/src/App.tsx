import "./styles/main.css";
import logoImg from "./assets/logo-nlw-esports.svg";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" className="max-h-10" />
      <h1>Seu duo está aqui.</h1>
    </div>
  );
}

export default App;
