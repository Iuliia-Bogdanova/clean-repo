import "./_base.scss";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import About from "../../about/About";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;