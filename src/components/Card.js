
import Card from 'react-bootstrap/Card';
import logo from '../capture.PNG'
import Example from './Profile';

function CardUser({user}) {
  return (
    <Card style={{ width: '16rem',margin:'20px'}}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.username}</Card.Text>
        <Card.Text><b>Email:</b> {user.email}</Card.Text>
        <Example user={user}/>
      </Card.Body>
    </Card>
  );
}

export default CardUser;