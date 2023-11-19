import Badge from 'react-bootstrap/Badge';

const Tags = (props) => {
  return (
    <Badge bg={props.color}>{props.text}</Badge>
  );
}

export default Tags;