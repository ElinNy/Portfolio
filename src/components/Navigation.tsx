import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation: React.FC = () => {
    return (
        <>
        <Navbar style={{justifyContent:"flex-start"}}>
            <Container style={{justifyContent:"flex-start"}}>
            <Nav.Link className="navMargin">Home</Nav.Link>
            <Nav.Link className="navMargin">About</Nav.Link>
            <Nav.Link className="navMargin">Contact</Nav.Link>
            </Container>
        </Navbar>
        </>
    )
};
export default Navigation;;