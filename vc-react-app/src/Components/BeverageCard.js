import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function BeverageCard() {
    return (
        
    <CardGroup>
        <br/>
        <Card border="warning" style={{ width: '10rem', margin:"3px"}} >
        <Card.Img variant="top" src="https://freebie.photography/food/fresh_orange_juice.jpg" width="100%" height="100%" />
        <Card.Body>
            <Card.Title>Orange Juice</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
        </Card>

        <Card border="primary" style={{ width: '18rem', margin:"3px"}} >
        <Card.Img variant="top" src="https://tse3.mm.bing.net/th?id=OIP.slANiJWJogTIzrB-DBrbYwHaE8&pid=Api&P=0" width="100%" height="100%"  />
        <Card.Body>
            <Card.Title>Fruit Punch Juice</Card.Title>
            <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
        </Card>

        <Card border="success" style={{ width: '18rem', margin:"3px"}} >
        <Card.Img variant="top" src="https://www.foodista.com/sites/default/files/styles/recype/public/Green-Juice-Tasty-Kitchen.jpg" width="100%" height="100%"  />
        <Card.Body>
            <Card.Title>Green Juice</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
        </Card>
    </CardGroup>
    );
}

export default BeverageCard;
