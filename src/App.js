import 'animate.css';
import React, { useState } from 'react';
import product from './product';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Badge, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';

function App() {
  const [variantIndex, setVariantIndex] = useState(0);
  const [firstName] = useState("Phina");
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: ''
  });

  if (!product.variants || product.variants.length === 0) {
    return <p>Erreur : Aucune variante de produit trouvée.</p>;
  }

  const variant = product.variants[variantIndex];

  const nextVariant = () => {
    setVariantIndex((prev) => (prev + 1) % product.variants.length);
  };

  const handleSend = () => {
    if (contact.name && contact.email && contact.message) {
      console.log("Message envoyé :", contact);
      alert("Message envoyé !");
      setContact({ name: '', email: '', message: '' });
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  };

  // ✅ RETURN PLACÉ CORRECTEMENT DANS App()
  return (
    <>
      {/* NAVBAR */}
      <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#">Ma Boutique React</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Accueil</Nav.Link>
              <Nav.Link href="#">Produits</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* CONTENU PRINCIPAL */}
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-custom px-3">
        <div className="w-100" style={{ maxWidth: '450px' }}>
          <Card key={variantIndex} className="text-center p-4 shadow-lg border-0 bg-white rounded-4 animate__animated animate__fadeIn">
            <Card.Body>
              <Badge bg="info" className="mb-3 px-3 py-2 fs-6 rounded-pill">
                Mode : {variant.mode}
              </Badge>
              <Card.Title className="mb-3 fs-3 fw-bold text-primary">{variant.name}</Card.Title>
              <Card.Img
                variant="top"
                src={variant.image}
                alt={variant.name}
                className="mx-auto d-block"
                style={{
                  width: "160px",
                  borderRadius: "20px",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.15)"
                }}
              />
              <Card.Text className="mt-3 text-secondary fs-6 px-2">{variant.description}</Card.Text>
              <h4 className="mt-4 text-success fw-semibold">{variant.price}</h4>
              <Button
                className="mt-4 px-4 py-2 custom-btn"
                variant="primary"
                onClick={nextVariant}
              >
                Changer de mode
              </Button>
            </Card.Body>
          </Card>

          <div className="text-center mt-4">
            <p className="fs-5 text-dark">
              {firstName ? `Bonjour, ${firstName} !` : "Bonjour !"}
            </p>
            {firstName && (
              <img
                src="https://cdn-icons-png.flaticon.com/512/2922/2922561.png"
                alt="User"
                width="90"
                className="rounded-circle shadow avatar-img"
              />
            )}
          </div>
        </div>
      </div>

      {/* SECTION CONTACT */}
      <Container className="my-5">
        <h2 className="text-center mb-4 text-primary">Contactez-nous</h2>
        <table className="table table-bordered shadow-sm">
          <thead className="table-primary text-center">
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                  placeholder="Votre nom"
                />
              </td>
              <td>
                <input
                  type="email"
                  className="form-control"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  placeholder="Votre email"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={contact.message}
                  onChange={(e) => setContact({ ...contact, message: e.target.value })}
                  placeholder="Votre message"
                />
              </td>
              <td className="text-center">
                <button className="btn btn-success" onClick={handleSend}>
                  Envoyer
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-light mt-5 pt-4 pb-3">
        <Container className="text-center">
          <Row className="mb-3">
            <Col>
              <a href="https://facebook.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook fa-lg me-3 text-light"></i>
              </a>
              <a href="https://twitter.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter fa-lg me-3 text-light"></i>
              </a>
              <a href="https://instagram.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram fa-lg me-3 text-light"></i>
              </a>
              <a href="https://www.paypal.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-paypal fa-lg me-3 text-light"></i>
              </a>
              <a href="mailto:contact@monsite.com" className="text-light">
                <i className="fas fa-envelope fa-lg text-light"></i>
              </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="mb-0">&copy; {new Date().getFullYear()} Mon Projet React — Tous droits réservés.</p>
              <small>
                <a href="/mentions-legales" className="text-secondary text-decoration-none">
                  Mentions légales
                </a>
              </small>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default App;
