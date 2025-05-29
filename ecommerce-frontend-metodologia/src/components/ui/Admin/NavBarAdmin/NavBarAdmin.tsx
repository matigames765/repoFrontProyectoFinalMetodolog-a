import { Container, Navbar } from "react-bootstrap";
import { House, Plus } from "lucide-react";
import { useNavigate } from "react-router";

import styles from "./NavBarAdmin.module.css";
interface NavBarAdminProps {
  onOpenModal: () => void;
}

export const NavBarAdmin = ({ onOpenModal }: NavBarAdminProps) => {
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

        <Navbar.Text className={styles.navContainer}>
          Usuario: Usuario
        </Navbar.Text>
        <Navbar.Text
          onClick={onOpenModal}
          className={styles.addProductContainer}
        >
          Añadir un producto
          <Plus size={20} />
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};
