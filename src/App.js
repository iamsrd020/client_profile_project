import React from 'react';
import './App.css';
import {Navbar,Form,FormControl,NavDropdown,Card, Row,Col,Button} from "react-bootstrap";
import { HiMenuAlt1} from "react-icons/hi";
import {FaSearch } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';


let App = () => {

  return (
    
    <div>
    <Navbar expand="lg" className="bg-color p-3 py-2">
      <Navbar.Brand>
     <img src="https://smarthr.dreamstechnologies.com/documentation/assets/img/logo/favicon.png"  alt="Logo-pic" />
     </Navbar.Brand>
     
     <Navbar.Brand>
     <i className="material-icons"> <HiMenuAlt1 color="white" fontSize={40}/></i>
     </Navbar.Brand>

     <h3 className="mt-2 text-white" fontSize="30">Dreams Technologies</h3>

     
        <Form className="ms-auto d-flex mb-2">
         <FormControl className="bg-transparent rounded-pill border-0 " placeholder="Search here" style={{ color: 'black' }}/>      {/*aria-label="Search"  aria-describedby="basic-addon2" */}
        <button className="bg-transparent rounded-pill border-0"> <FaSearch  size={20} color="#f8f9fa" /></button>
        </Form>

        {/* <NavDropdown title={<US />} id="basic-nav-dropdown"></NavDropdown> */}
          <NavDropdown title="English" id="dropdown" >
            <NavDropdown.Item href="#action/3.1">Kannada</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">French</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Spanish</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">More languages</NavDropdown.Item>
          </NavDropdown> 

           
            

          <MdNotificationsNone color="white" size={35}/>

          
          <FiMessageCircle color="white" size={33}/>

          <Avatar alt="Remy Sharp" src="https://tse4.mm.bing.net/th?id=OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ&pid=Api&P=0&h=180" style={{height:'30px',width:'30px'}}/>
        
          <NavDropdown title="Admin"  id="basic-nav-dropdown" className="text-white">
            <NavDropdown.Item href="#action/1">Accounts</NavDropdown.Item>
            <NavDropdown.Item href="#action/2">Members</NavDropdown.Item>
            <NavDropdown.Item href="#action/3">Logout</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/4">Other Admins</NavDropdown.Item>
          </NavDropdown>
    </Navbar>
 
    <div className="container ml-2">
        <h4 style={{margin:'10px'}}>Profile</h4>
        <h6 style={{margin:'10px'}}>Dashboard/Profile</h6>
      </div>


<Card style={{ width: '95%', height: '225px', borderWidth: '2px', borderColor: 'whitesmoke', margin: '40px', lineHeight: '30px' ,marginTop:'0'}}>
      <Row>
        <Col md={2}>
          <Card.Img
            src="https://w0.peakpx.com/wallpaper/547/1017/HD-wallpaper-money-heist-ei-professor-profile-whatsapp-dp.jpg"
            alt="Card Photo"
            style={{ height: '150px', width: '200px', marginTop: '20px', marginLeft: '20px' }}
            className='circleshape'
          />
        </Col>

        <Col md={6} className="border-right">
          <h3 className="mb-3">Global Technologies</h3>
          <h6 className='mb-3' style={{ fontWeight: 'bold' }}>Darshan SR</h6>
          <h7 >CEO</h7>
          <h6 className="mb-3" style={{ fontWeight: 'bold' }}>Employee ID : CLT-0009</h6>
          <Button className='bg-color mt-4 text-white border-0 mb-2 px-4 py-2' style={{ marginBottom: '50px' }}>Send Message</Button>
        </Col>
        <Col md={0} className="d-flex align-items-center" style={{borderLeft:'20%'}}>
              <div className="vertical-line" style={{color:'whitesmoke'}}></div>
            </Col>
       
        <Col md={0}>
        <h6 className="mb-3"> Phone: </h6>
        <h6 className="mb-3">Email: </h6>
        <h6 className="mb-3">Birthday:</h6>
        <h6 className="mb-3">Address: </h6>
        <h6 className="mb-3">Gender: </h6>
        </Col>
        <Col md={0}>
        <h6 className="mb-3" style={{color:'blue'}}> 181844688 </h6>
        <h6 className="mb-3" style={{color:'blue'}}>curd@gmail.com </h6>
        <h6 className="mb-3">20-4-2001</h6>
        <h6 className="mb-3">New york</h6>
        <h6 className="mb-3">Male </h6>
        </Col>
        </Row>
      </Card>
      <Card style={{ width: '95%', height: '50px', borderWidth: '2px', borderColor: 'whitesmoke', margin: '40px', lineHeight: '0px',marginTop:'-3%' }}>
        <h6>Projects   Tasks</h6>
      </Card>
      

<Row>
      <Col md={0}>
        <Card className='mt-3 mb-3' style={{ height: '100%', width:'100%', borderWidth: '2px', borderColor: 'whitesmoke', margin: '40px' }}>
          <h4  style={{fontSize:'19px',fontWeight:'bold'}} classname='mb-3' >Office Management</h4>
          <h6  style={{fontSize:'13px',fontFamily:'-moz-initial', fontWeight:'bold'}} className='fontcolor'>1 Open Task, 9 Completed Task</h6>
        <h7 className='mt-2 mb-2' style={{fontSize:'13px',fontFamily:'-moz-initial'}}>Lorem Ipsum is Simply dummy text of the printing and typesetting industry.When an unknown printer took a gallery of type and scrambled it....</h7>
        <h5  style={{fontSize:'13px',fontFamily:'-moz-initial', fontWeight:'bold'}}>Deadline:</h5>
        <h6  style={{fontSize:'11px'}} className='fontcolor'>20th Apr 2024</h6>
        <h6 className='mt-2 mb-2' style={{fontSize:'13px',fontFamily:'-moz-initial', fontWeight:'bold'}}>Project Leader:</h6>
        <Card.Img src='https://tse4.mm.bing.net/th?id=OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ&pid=Api&P=0&h=180'
          style={{ width: '40px',height:'40px' }}
          className='rounded-circle'
             />
        <h6 className='mt-3 mb-3' style={{fontSize:'13px',fontFamily:'-moz-initial', fontWeight:'bold'}}>Team:</h6>
        
        <AvatarGroup total={24} style={{height:"180px",width:'180px'}}>
      <Avatar alt="Remy Sharp" src="https://tse4.mm.bing.net/th?id=OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ&pid=Api&P=0&h=180" />
      <Avatar alt="Travis Howard" src="https://tse4.mm.bing.net/th?id=OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ&pid=Api&P=0&h=180" />
      <Avatar alt="Agnes Walker" src="https://tse4.mm.bing.net/th?id=OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ&pid=Api&P=0&h=180" />
      <Avatar alt="Trevor Henderson" src="https://tse4.mm.bing.net/th?id=OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ&pid=Api&P=0&h=180" />
    </AvatarGroup>
    <h6  style={{fontSize:'10px',fontWeight:'bold'}}>Progress:    40%</h6>
      <ProgressBar  variant="success" now={40} style={{ height: '5px' }} />
    </Card>
    </Col>


    <Col md={0}>
        <Card className='mt-3 mb-3' style={{ height: '100%', width:'100%', borderWidth: '2px', borderColor: 'whitesmoke', margin: '40px' }}>
          <h4  style={{fontSize:'19px',fontWeight:'bold'}} classname='mb-3' >Office Management</h4>
          <h6  style={{fontSize:'13px',fontFamily:'-moz-initial', fontWeight:'bold'}} className='fontcolor'>1 Open Task, 9 Completed Task</h6>
        <h7 className='mt-2 mb-2' style={{fontSize:'13px',fontFamily:'-moz-initial'}}>Lorem Ipsum is Simply dummy text of the printing and typesetting industry.When an unknown printer took a gallery of type and scrambled it....</h7>
        <h5  style={{fontSize:'13px',fontFamily:'-moz-initial', fontWeight:'bold'}}>Deadline:</h5>
        <h6  style={{fontSize:'11px'}} className='fontcolor'>20th Apr 2024</h6>
        <h6 className='mt-2 mb-2' style={{fontSize:'13px',fontFamily:'-moz-initial', fontWeight:'bold'}}>Project Leader:</h6>
        <Card.Img src='https://tse4.mm.bing.net/th?id=OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ&pid=Api&P=0&h=180'
          style={{ width: '40px',height:'40px' }}
          className='rounded-circle'
             />
        <h6 className='mt-3 mb-3' style={{fontSize:'13px',fontFamily:'-moz-initial', fontWeight:'bold'}}>Team:</h6>
        
        <AvatarGroup total={24} style={{height:"180px",width:'180px'}}>
      <Avatar alt="Remy Sharp" src="https://tse4.mm.bing.net/th?id=OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ&pid=Api&P=0&h=180" />
      <Avatar alt="Travis Howard" src="https://tse4.mm.bing.net/th?id=OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ&pid=Api&P=0&h=180" />
      <Avatar alt="Agnes Walker" src="https://tse4.mm.bing.net/th?id=OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ&pid=Api&P=0&h=180" />
      <Avatar alt="Trevor Henderson" src="https://tse4.mm.bing.net/th?id=OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ&pid=Api&P=0&h=180" />
    </AvatarGroup>
    <h6  style={{fontSize:'10px',fontWeight:'bold'}}>Progress:    40%</h6>
      <ProgressBar  variant="success" now={40} style={{ height: '5px' }} />
    </Card>
    </Col>

    <Col md={0}>
        <Card className='mt-3 mb-3' style={{ height: '100%', width:'100%', borderWidth: '2px', borderColor: 'whitesmoke', margin: '40px' }}>
          <h4  style={{fontSize:'19px',fontWeight:'bold'}} classname='mb-3' >Office Management</h4>
          <h6  style={{fontSize:'13px',fontFamily:'-moz-initial', fontWeight:'bold'}} className='fontcolor'>1 Open Task, 9 Completed Task</h6>
        <h7 className='mt-2 mb-2' style={{fontSize:'13px',fontFamily:'-moz-initial'}}>Lorem Ipsum is Simply dummy text of the printing and typesetting industry.When an unknown printer took a gallery of type and scrambled it....</h7>
        <h5  style={{fontSize:'13px',fontFamily:'-moz-initial', fontWeight:'bold'}}>Deadline:</h5>
        <h6  style={{fontSize:'11px'}} className='fontcolor'>20th Apr 2024</h6>
        <h6 className='mt-2 mb-2' style={{fontSize:'13px',fontFamily:'-moz-initial', fontWeight:'bold'}}>Project Leader:</h6>
        <Card.Img src='https://tse4.mm.bing.net/th?id=OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ&pid=Api&P=0&h=180'
          style={{ width: '40px',height:'40px' }}
          className='rounded-circle'
             />
        <h6 className='mt-3 mb-3' style={{fontSize:'13px',fontFamily:'-moz-initial', fontWeight:'bold'}}>Team:</h6>
        
        <AvatarGroup total={24} style={{height:"180px",width:'180px'}}>
      <Avatar alt="Remy Sharp" src="https://tse4.mm.bing.net/th?id=OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ&pid=Api&P=0&h=180" />
      <Avatar alt="Travis Howard" src="https://tse4.mm.bing.net/th?id=OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ&pid=Api&P=0&h=180" />
      <Avatar alt="Agnes Walker" src="https://tse4.mm.bing.net/th?id=OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ&pid=Api&P=0&h=180" />
      <Avatar alt="Trevor Henderson" src="https://tse4.mm.bing.net/th?id=OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ&pid=Api&P=0&h=180" />
    </AvatarGroup>
    <h6  style={{fontSize:'10px',fontWeight:'bold'}}>Progress:    40%</h6>
      <ProgressBar  variant="success" now={40} style={{ height: '5px' }} />
    </Card>
    </Col>


    <Col md={0}>
        <Card className='mt-3 mb-3' style={{ height: '100%', width:'100%', borderWidth: '2px', borderColor: 'whitesmoke', margin: '40px' }}>
          <h4  style={{fontSize:'19px',fontWeight:'bold'}} classname='mb-3' >Office Management</h4>
          <h6  style={{fontSize:'13px',fontFamily:'-moz-initial', fontWeight:'bold'}} className='fontcolor'>1 Open Task, 9 Completed Task</h6>
        <h7 className='mt-2 mb-2' style={{fontSize:'13px',fontFamily:'-moz-initial'}}>Lorem Ipsum is Simply dummy text of the printing and typesetting industry.When an unknown printer took a gallery of type and scrambled it....</h7>
        <h5  style={{fontSize:'13px',fontFamily:'-moz-initial', fontWeight:'bold'}}>Deadline:</h5>
        <h6  style={{fontSize:'11px'}} className='fontcolor'>20th Apr 2024</h6>
        <h6 className='mt-2 mb-2' style={{fontSize:'13px',fontFamily:'-moz-initial', fontWeight:'bold'}}>Project Leader:</h6>
        <Card.Img src='https://tse4.mm.bing.net/th?id=OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ&pid=Api&P=0&h=180'
          style={{ width: '40px',height:'40px' }}
          className='rounded-circle'
             />
        <h6 className='mt-3 mb-3' style={{fontSize:'13px',fontFamily:'-moz-initial', fontWeight:'bold'}}>Team:</h6>
        
        <AvatarGroup total={24} style={{height:"180px",width:'180px'}}>
      <Avatar alt="Remy Sharp" src="https://tse4.mm.bing.net/th?id=OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ&pid=Api&P=0&h=180" />
      <Avatar alt="Travis Howard" src="https://tse4.mm.bing.net/th?id=OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ&pid=Api&P=0&h=180" />
      <Avatar alt="Agnes Walker" src="https://tse4.mm.bing.net/th?id=OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ&pid=Api&P=0&h=180" />
      <Avatar alt="Trevor Henderson" src="https://tse4.mm.bing.net/th?id=OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ&pid=Api&P=0&h=180" />
    </AvatarGroup>
    <h6  style={{fontSize:'10px',fontWeight:'bold'}}>Progress:    40%</h6>
      <ProgressBar  variant="success" now={40} style={{ height: '5px' }} />
    </Card>
    </Col>
    </Row>


        

    </div>
  )
}

export default App;
