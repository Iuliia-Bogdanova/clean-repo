import "./styles/base.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Contacts from "./pages/contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <About /> */}
      <Gallery />
      {/* <Contacts /> */}
      <Footer />
    </div>
  );
}

export default App;