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
                    {/* <h2>Nama saya {this.props.userName}</h2>
                    <h2>Saya tinggal di {this.props.userAddress}</h2> */}
                </div>
                {/* Navbar */}
                <div>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">Ultra React Agenda</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <NavDropdown title="Menu" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Add Agenda</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">View Agenda History</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
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