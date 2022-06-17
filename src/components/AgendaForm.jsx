import React from 'react';
import { Button, Form } from 'react-bootstrap';


class AgendaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            agendaTitle: "",
            agendaDate: "",
            agendaDescription: ""
        }
    }

    componentDidMount() {

    }

    // Handle input event for Agenda Title component (Binding Function)
    handleInputAgendaTitle(e) {
        // console.log('Input detected!', e);
        let agendaTitle = e.target.value;
        // console.log('Input detected!', agendaTitle);
        this.setState({
            agendaTitle: agendaTitle
        });
    }

    handleInputAgendaDate(e) {
        let agendaDate = e.target.value;
        console.log(agendaDate);
        this.setState({
            agendaDate: agendaDate
        });
    }

    // Arrow Function
    handleInputAgendaDescription = (e) => {
        let agendaDescription = e.target.value;
        console.log(agendaDescription);
        this.setState({
            agendaDescription: agendaDescription
        });
    }

    validateFormSubmission = (agenda) => {
        if (agenda.title == "") {
            return {
                error: true,
                message: "Title tidak boleh kosong!"
            }
        }
        else if (agenda.date == "") {
            return {
                error: true,
                message: "Date tidak boleh kosong!"
            }
        }
        else if (agenda.description == "") {
            return {
                error: true,
                message: "Description tidak boleh kosong!"
            }
        }
        else {
            return {
                error: false,
                message: "Data sudah sesuai!"
            }
        }
    }

    handleAgendaFormSubmit = (e) => {
        e.preventDefault();
        let agenda = {
            title: this.state.agendaTitle,
            date: this.state.agendaDate,
            description: this.state.agendaDescription
        };

        let validationResult = this.validateFormSubmission(agenda);
        console.log(validationResult);

        // jika error == false (artinya tidak ada error), baru add datanya ke table
        if (validationResult.error === false) {            
            this.props.callAddAgendaFunction(agenda); // akan memanggil method addAgenda() dari component HomePage
            this.resetAgendaForm(e);
        } 
        else {
            // berarti ada error
            // TODO: tampilkan error message ke user
            // alert(validationResult.message);
            this.props.showValidationResult(validationResult);
        }
    }

    resetAgendaForm = (e) => {
        console.log(e);
        
        // Reset form inputs
        e.target.agenda_title.value = "";
        e.target.agenda_date.value = "";
        e.target.agenda_description.value = "";

        this.setState({
            agendaTitle: "",
            agendaDate: "",
            agendaDescription: ""
        });
    }

    render() {
        return (
            <div>
                <h3>New Agenda - Class</h3>
                <Form onSubmit={this.handleAgendaFormSubmit}> 
                    {/* Non-bootstrap */}
                    {/* TODO: Add some styling */}
                    {/* <div id="input-agenda-title">
                        <label for="agenda_title">Agenda Title</label>
                        <input type="text" name="agenda_title"></input>
                    </div> */}
                    {/* Bootstrap => agenda date (datepicker), agenda description (text area) */}
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Agenda Title</Form.Label>
                        <Form.Control type="text" placeholder="What do you want to do?" onChange={this.handleInputAgendaTitle.bind(this)} name="agenda_title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Agenda Date</Form.Label>
                        <Form.Control type="date" placeholder="Oh! When? Is it soon?" onChange={this.handleInputAgendaDate.bind(this)} name="agenda_date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Agenda Description</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Tell me about it!" onChange={this.handleInputAgendaDescription} name="agenda_description" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}

export default AgendaForm;