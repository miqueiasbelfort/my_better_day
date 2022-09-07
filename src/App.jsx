import { useState } from "react";
import "./App.css";

//components
import Content from "./components/Content";
import Rotine from "./components/Rotine";

function App() {
  const [viewRotine, setViewRotine] = useState(false);

  return (
    <div className="App">
      <div className="header">
        <div>
          <h1>
            Bem vindo ao <span>My Batter Day</span>
          </h1>
          <h3>
            Vamos criar uma rotina baseado nos seus gostos. <a>Saiba Mais</a>
          </h3>
        </div>
      </div>

      <div className="anunciosContainer">
        <div className="anuncioWeb">
            Anuncio
        </div>
      </div>

      {viewRotine ? <Rotine/> : <Content setView={setViewRotine} />}
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
