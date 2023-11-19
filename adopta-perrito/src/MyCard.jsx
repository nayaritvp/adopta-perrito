import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className="card-img" variant="top" src={props.link} />
      <Card.Body>
        <Card.Title>Nombre: {props.name}</Card.Title>
        <Card.Text>
            <p>Detalle: {props.details}</p>
        </Card.Text>
        <Tags text={props.tagText} color={props.tagColor} />
      </Card.Body>
    </Card>
  );
}

export default MyCard;