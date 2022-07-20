/** @format */
import "./App.css";
import Navbar from "./Compnents/Navbar/Navbar";
import Hero from "./Compnents/Hero/Hero";
import Trending from "./Compnents/TopTrending/Trending";
import Why from "./Compnents/why/Why";
import Features from "./Compnents/Features/Features";
import Partner from "./Compnents/Partners/Partner";
import Start from "./Compnents/GetStarted/Start";
import Effective from'./Compnents/Effective/Effective'
import Newsletter from'./Compnents/Newsletter/Newsletter'
import Footer from "./Compnents/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Why />
      <Trending />
      <Features />
      <Partner />
      <Start />
      <Effective/>
      <Newsletter />
      <Footer/>
    </div>
  );
}

export default App;
