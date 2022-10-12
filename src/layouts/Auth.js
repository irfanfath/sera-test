import React, { useEffect } from "react";
import { useLocation, Route, Navigate, Routes, useNavigate } from "react-router-dom";
// reactstrap components
import { Col, Container, Row } from "reactstrap";
import routes from "../../src/routes";

const Auth = () => {
  const mainContent = React.useRef(null);
  const location = useLocation();
  const navigate = useNavigate()

  React.useEffect(() => {
    document.body.classList.add("bg-login");
    return () => {
      document.body.classList.remove("bg-login");
    };
  }, []);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
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

  useEffect(() => {
    const isAuthenticate = localStorage.getItem('authentihated')
    const token = localStorage.getItem('token')

    if(token && isAuthenticate){
      navigate('/admin')
    }
  })

  return (
    <>
      <div className="main-content bg-login" ref={mainContent}>
        <br/><br/><br/>
            <Container>
              <div className="text-center">
                <Row>
                  <Col lg="5" md="6">
                  {/* <img src={require('../assets/img/brand/kitong-bisa.png')} alt="logo" /> */}
                  <br/><br/>
                    <h1 className="text-darker">Selamat datang</h1>
                    <p className="text-lead text-darker">
                      Silahkan login ke akun anda
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
        {/* Page content */}
        <Container>
          <Row>
            <Routes>
            {getRoutes(routes)}
              {/* <Redirect from="*" to="/auth/login" /> */}
              <Route
                path="/"
                element={<Navigate to="/auth/login" replace />}
            />
            </Routes>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Auth;
