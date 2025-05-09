import { Container, Navbar } from "react-bootstrap";
import { House } from "lucide-react";
import { useNavigate } from "react-router";

import styles from "./NavBarAdmin.module.css";
export const NavBarAdmin = () => {
  const navigate = useNavigate();

  const handleNavigateToLanding = () => {
    navigate("/");
  };

  return (
    <Navbar className={styles.navContainerPrincipal}>
      <Container>
        <Navbar.Brand
          onClick={handleNavigateToLanding}
          style={{ cursor: "pointer" }}
          className={styles.navContainer}
        >
          <House style={{ marginRight: "8px" }} />
          Volver a Inicio
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className={styles.navContainer}>
            Usuario: Usuario
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
