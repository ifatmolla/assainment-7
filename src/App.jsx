import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PlayersContainer from "./components/PlayersContainer";

function App() {
  const [coin, setCoin] = useState(0);

  return (
    <div className="flex flex-col w-full">
      <div className="px-4 w-full max-w-7xl mx-auto">
        <Header coin={coin}></Header>
        <Banner coin={coin} setCoin={setCoin}></Banner>
        <PlayersContainer coin={coin}></PlayersContainer>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
