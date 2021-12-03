import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logIn from '../asset/image/user.png'
import logo from '../asset/image/logo.png'
import './TopNavigation.css'
const TopNavigation = () => {
	return (
		
			<Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
				<Container className="nav-bar">
					<Navbar.Brand href='#home'><img className="logo-img" src={logo} alt="" /> </Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link href='#home'>হোম</Nav.Link>
							<Nav.Link href='#about-us'>আমাদের সম্পর্কে</Nav.Link>
							<Nav.Link href='#q&a'>প্রশ্ন ও উত্তর</Nav.Link>
							<Nav.Link href='#tutorial'>টিউটোরিয়াল</Nav.Link>
							<Nav.Link href='#contact'>যোগাযোগ</Nav.Link>
							
						</Nav>
						<Nav>
							<Nav.Link href='#deets'><img className="logIn-img" src={logIn} alt="" />LogIn</Nav.Link>
							
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		
	);
};

export default TopNavigation;