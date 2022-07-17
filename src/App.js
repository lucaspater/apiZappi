import React from "react";
import Routes from "./routes/Routes"

import Layout from "./components/Layout/Layout";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Layout>
      <NavBar />
      <Routes />
      <Footer />
    </Layout>
  );
}

export default App;
