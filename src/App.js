import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";



function App() {
  const [isPortuguese, setIsPortuguese] = useState(false);

  function translate() {
    setIsPortuguese(!isPortuguese);

  }


  return (
    <div className="container">
      <Header isPortuguese={isPortuguese}></Header>
      <Main isPortuguese={isPortuguese} translate={translate}></Main>
      <Footer isPortuguese={isPortuguese}></Footer>
    </div>
  );
}

export default App;
