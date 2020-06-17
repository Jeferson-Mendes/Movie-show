import React from "react";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <section style={{height: '80vh'}}/>
      <Footer />
    </div>
  );
}
