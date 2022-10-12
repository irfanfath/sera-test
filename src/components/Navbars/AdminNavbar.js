import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  Container,
  Button,
} from "reactstrap";

const AdminNavbar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear();
    navigate('/auth')
  }

  return (
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container>
            <Button color="info" onClick={handleLogout}><img src="https://img.icons8.com/ios-filled/20/FFFFFF/exit.png" alt="logout" title="Logout"/>&emsp;Logout</Button>
          </Container>
        </Navbar>
  );
};

export default AdminNavbar;

