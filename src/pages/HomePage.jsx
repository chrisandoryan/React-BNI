import React from 'react';
import { Col, Container, Nav, Navbar, NavDropdown, Row, Table } from 'react-bootstrap';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            agendas: [
                {
                    title: "Belajar React JS",
                    date: "17 Juni 2022",
                    description: "Belajar React JS biar bisa bikin web untuk nge-hack NASA"
                },
                {
                    title: "Makan Baso Boedjangan",
                    date: "16 Juni 2022",
                    description: "Kumps bersama teman-teman"
                },
                {
                    title: "Nonton Konser",
                    date: "31 Juni 2022",
                    description: "Hiling"
                },
                {
                    title: "Beli Rumah",
                    date: "31 Juni 2023",
                    description: "Modal Usaha"
                },
            ],
            pageTitle: "Agenda - Homepage",
        }
    }

    componentDidMount() {
        // setelah 5 detik, data agenda bertambah dan masuk ke state agendas
        setTimeout(() => {
            // let oldAgendas = this.state.agendas; // gaboleh gini, karena copy reference
            let oldAgendas = [...this.state.agendas]; // copy isi this.state.agendas ke variable baru

            oldAgendas.push({
                title: "Kerjain PR",
                date: "20 Juni 2022",
                description: "Biar ga dimarahin Bu Guru"
            });
            this.setState({
                agendas: oldAgendas
            });
        }, 5000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component is updated!");
        console.log("Prev Props", prevProps);
        console.log("Prev State", prevState);
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
                {/* Content */}
                <div>
                    <Container>
                        <Row>
                            {/* Untuk Today's Agenda */}
                            <Col style={{ border: "1px solid black" }} xs={3} md={3} lg={3} >
                                1
                            </Col>
                            {/* Untuk Table Agenda */}
                            <Col style={{ border: "1px solid black" }} xs={9} md={9} lg={9}>
                                <h3>Your Agenda</h3>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Title</th>
                                            <th>Date</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.agendas.map((agenda, i) => {
                                                return (
                                                    <tr>
                                                        <td>{i + 1}</td>
                                                        <td>{agenda.title}</td>
                                                        <td>{agenda.date}</td>
                                                        <td>{agenda.description}</td>
                                                    </tr>
                                                )
                                           }) 
                                        }
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default HomePage;