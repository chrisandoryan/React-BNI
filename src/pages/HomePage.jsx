import React from 'react';
import { Button, Col, Container, Nav, Navbar, NavDropdown, Row, Table } from 'react-bootstrap';
import AgendaForm from '../components/AgendaForm';
import AgendaFormFunction from '../components/AgendaFormFunction';
import ToastMessage from '../components/ToastMessage';

import styles from '../assets/css/main_style.module.css';

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
            showToast: false,
            toastMessage: ""
        }
    }

    componentDidMount() {
        // setelah 5 detik, data agenda bertambah dan masuk ke state agendas
        setTimeout(() => {

            this.addAgenda({
                title: "Kerjain Skripsi",
                date: "21 Juni 2022",
                description: "Biar lulus tepat waktu"
            });

        }, 5000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component is updated!");
        console.log("Prev Props", prevProps);
        console.log("Prev State", prevState);
    }

    addAgenda = (dataAgenda) => {
        // let currAgendas = this.state.agendas; // gaboleh gini, karena ini copy reference
        let currAgendas = [...this.state.agendas]; // copy isi this.state.agendas ke variable baru

        currAgendas.push(dataAgenda); // push data baru ke variable agenda yang udah dicopy
        this.setState({
            agendas: currAgendas
        }); // set state agenda dengan nilai yang baru (yang udah ditambahin data baru)
    }

    deleteAgenda = (id) => {
        let currAgendas = [...this.state.agendas];
        currAgendas.splice(id, 1); // delete elemen dari array, mulai dari data ke-id sebanyak 1 data
        this.setState({
            agendas: currAgendas
        });
    }

    showValidationResult = (valResult) => {
        this.setState({
            showToast: true,
            toastMessage: valResult.message
        });
    }

    hideToast = () => {
        this.setState({
            showToast: false,
            toastMessage: ""
        });
    }

    // dimana kita menulis HTML agar dirender oleh browser
    render() {
        return (
            <div>
                <ToastMessage hideToast={this.hideToast} show={this.state.showToast} message={this.state.toastMessage}></ToastMessage>
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
                            {/* Untuk Add Agenda */}
                            <Col style={{ border: "0px solid black" }} xs={3} md={3} lg={3} >
                                <AgendaFormFunction callAddAgendaFunction={this.addAgenda}></AgendaFormFunction>
                                {/* <AgendaForm showValidationResult={this.showValidationResult} callAddAgendaFunction={this.addAgenda}></AgendaForm> */}
                            </Col>
                            {/* Untuk Table Agenda */}
                            <Col style={{ border: "0px solid black" }} xs={9} md={9} lg={9}>
                                <div className={styles.table_container}>
                                    <h3>Your Agenda</h3>
                                    <Table id={styles.agenda_table} striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Title</th>
                                                <th>Date</th>
                                                <th>Description</th>
                                                <th>Action</th>
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
                                                            <td><Button variant="danger" onClick={() => { this.deleteAgenda(i) }}>Delete</Button></td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default HomePage;