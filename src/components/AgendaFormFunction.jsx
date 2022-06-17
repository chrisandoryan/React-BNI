import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function AgendaFormFunction(props) {
    const [agendaTitle, setAgendaTitle] = useState("");
    const [agendaDate, setAgendaDate] = useState("");
    const [agendaDescription, setAgendaDescription] = useState("");

    const resetAgendaForm = (e) => {
        e.target.agenda_title.value = "";
        e.target.agenda_date.value = "";
        e.target.agenda_description.value = "";

        setAgendaTitle("");
        setAgendaDate("");
        setAgendaDescription("");
    }

    const handleInputAgendaTitle = (e) => {
        let agendaTitleInput = e.target.value;
        setAgendaTitle(agendaTitleInput);
    }

    const handleInputAgendaDate = (e) => {
        setAgendaDate(e.target.value);
    }

    const handleInputAgendaDescription = (e) => {
        let agendaDescriptionInput = e.target.value;
        setAgendaDescription(agendaDescriptionInput);
    }

    const handleAgendaFormSubmit = (e) => {
        e.preventDefault();

        let agenda = {
            title: agendaTitle,
            date: agendaDate,
            description: agendaDescription
        }

        props.callAddAgendaFunction(agenda);
        resetAgendaForm(e);
    }

    const handleAgendaTitleValidation = (e) => {
        let agendaTitle = e.target.value;
        if (agendaTitle.length > 10) { // kalau pakai API call ke server: if (serverResponse.error == true) {alert}
            alert("Panjang Title tidak boleh lebih dari 10 karakter!");
        }
    }

    return (
        <div className="form_container">
            <h3 id="agenda_form_header">New Agenda - Functional</h3>
            <Form onSubmit={handleAgendaFormSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Agenda Title</Form.Label>
                    <Form.Control type="text" placeholder="What do you want to do?" onChange={handleInputAgendaTitle} onBlur={handleAgendaTitleValidation} name="agenda_title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Agenda Date</Form.Label>
                    <Form.Control type="date" placeholder="Oh! When? Is it soon?" onChange={handleInputAgendaDate} name="agenda_date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Agenda Description</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Tell me about it!" onChange={handleInputAgendaDescription} name="agenda_description" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}


// State di class: 
// this.state = {
//     agendaTitle: ""
// }

// set state di class:
// this.setState({
//     agendaTitle: 'hello'
// })

// Set state di functional
// setAgendaTitle('Hello');

export default AgendaFormFunction;