import React from 'react'
import { Navbar , Nav , Container , Button} from 'react-bootstrap';
import { Favorite , Search , CollectionsBookmark , Home } from '@mui/icons-material';


const Navi = () =>{
    return (
    <div>
    <>
  <Navbar variant="dark" className='navi-bar'>
    <Container fluid>
    <Navbar.Brand href="#home"><h1>Gallery</h1></Navbar.Brand>
    <Nav className="ms-auto">
    <Nav.Link href="#homes"><Home className='icon' sx={{ fontSize: 45 }} /></Nav.Link>
      <Nav.Link href="#favorite" className='navi'><Favorite className='icon' sx={{ fontSize: 45 }} /></Nav.Link>
      <Nav.Link href="#search"><Search className='icon' sx={{ fontSize: 45 }}   /></Nav.Link>
      <Nav.Link href="#albums"><CollectionsBookmark className='icon'  sx={{ fontSize: 40 }}   /></Nav.Link>
      <Nav.Item><Button className='icon-btn' variant="outline-warning">Login</Button></Nav.Item>
    </Nav>
    </Container>
  </Navbar>
</>
    </div>
    )
}

export default Navi