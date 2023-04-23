import React, { useState } from "react";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import HomeScreen from "./pages/homescreen/HomeScreen";
import { Container } from "react-bootstrap";
import "./App.scss";
import LoginScreen from "./pages/loginScreen/LoginScreen";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const handleToggleSidebar = () => setSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />

      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container className="app__main">{children}</Container>
      </div>
    </>
  );
};
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomeScreen />
            </Layout>
          }
        />

        <Route path="/auth" element={<LoginScreen />} />

        <Route
          path="/search"
          element={
            <Layout>
              <h2>Search</h2>
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
