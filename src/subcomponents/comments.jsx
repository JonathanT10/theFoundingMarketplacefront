import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';






Comments = () => {
return(
 <Form onSubmit={(event)=>this.handleClick(event)}>
 <Form.Group controlId="formBasicEmail">
         <Form.Label>Name</Form.Label>
         <Form.Control type="name" placeholder="Enter Name"onChange={this.nameChange}/>
         <Form.Text>
         </Form.Text>
     </Form.Group>
</Form>
)
}