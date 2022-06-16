import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            agendas: [
                {
                    title: "Agenda 1",
                    date: "",
                    description: ""
                },
                {
                    title: "Agenda 2",
                    date: "",
                    description: ""
                },
                {
                    title: "Agenda3",
                    date: "",
                    description: ""
                }
            ],
            pageTitle: "Agenda - Homepage",
        }
    }

    // dimana kita menulis HTML agar dirender oleh browser
    render() {
        return (
            <div>
                {/* Heading/Judul */}
                <div>
                    <h1>{this.state.pageTitle}</h1>
                    <h2>Nama saya {this.props.userName}</h2>
                    <h2>Saya tinggal di {this.props.userAddress}</h2>
                </div>
                {/* Navbar */}
                <div>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        )
    }
}

export default HomePage;