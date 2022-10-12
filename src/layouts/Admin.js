import React, { useEffect } from "react";
import { useLocation, Route, Navigate, Routes, useNavigate } from "react-router-dom";

// core components
import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";

import routes from "../../src/routes";

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  const navigate = useNavigate()

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  useEffect(() => {
    const isAuthenticate = localStorage.getItem('_athe')
    const token = localStorage.getItem('_beertk')

    if(!token || !isAuthenticate){
      navigate('/auth')
    }
  })

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.path}
            element={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        // logo={{
        //   innerLink: "/admin/index",
        //   imgSrc: require("../assets/img/brand/kitong-bisa.png"),
        //   imgAlt: "..."
        // }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar />
        <Routes>
        {getRoutes(routes)}
          {/* <Redirect from="*" to="/admin/index" /> */}
          <Route
                path="*"
                element={<Navigate to="/admin/index" replace />}
            />
        </Routes>
          
        <br/>
      </div>
    </>
  );
};

export default Admin;
