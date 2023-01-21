import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactForm() {
    return (
        <div>
            <br/>
    <Form style={{width: '100%'}} className='justify-content-center'>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label> Have Any Questions, Want to place a Catering order, Live Demonstrations</Form.Label>
        <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>

    </Form>
    </div>
    );
}

export default ContactForm;