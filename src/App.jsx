import "./styles/_base.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/about/About";

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