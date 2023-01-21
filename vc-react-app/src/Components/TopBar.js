import Nav from "react-bootstrap/Nav";

export default function TopBar() {
    return (
    <div>
        <Nav className='justify-content-center' defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
                <Nav.Link eventKey="link-1">Products</Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
                <Nav.Link eventKey="link-2">Contact Us</Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
                <Nav.Link eventKey="link-3">About Us</Nav.Link>
            </Nav.Item>

        </Nav>
        <br/>
    </div>
    );
}