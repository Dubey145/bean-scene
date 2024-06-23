import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./pages/Hero";
import Discover from "./pages/Discover";
import BestSellers from "./pages/BestSellers";
import Features from "./pages/Features";
import OrderNow from "./pages/OrderNow";
import Feedback from "./pages/Feedback";
import Subscribe from "./pages/Subscribe";
import Footer from "./pages/Footer";

function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <Discover />
      <BestSellers />
      <Features />
      <OrderNow />
      <Feedback />
      <Subscribe/>
      <Footer/>
    </main>
  );
}

export default App;
