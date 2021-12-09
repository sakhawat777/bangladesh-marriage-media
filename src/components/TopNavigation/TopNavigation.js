import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logIn from '../../asset/image/user.png';
import logo from '../../asset/image/logo.svg';
import './TopNavigation.css';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {
	return (
		<Navbar
			collapseOnSelect
			expand='lg'
			bg='light'
			variant='light'
			fixed='top'>
			<Container className='nav-bar'>
				<NavLink to='/'>
					<img className='logo-img' src={logo} alt='' />
				</NavLink>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<NavLink className='navbar-css' to='/'>
							হোম
						</NavLink>

						<NavLink className='navbar-css' to='/about-us'>
							আমাদের সম্পর্কে
						</NavLink>
						<NavLink className='navbar-css' to='/q&a'>
							প্রশ্ন ও উত্তর
						</NavLink>
						<NavLink className='navbar-css' to='/tutorial'>
							টিউটোরিয়াল
						</NavLink>
						<NavLink className='navbar-css' to='/contact'>
							যোগাযোগ
						</NavLink>
					</Nav>
					<Nav>
						<NavLink className='navbar-css' to='/logIn'>
							<img className='logIn-img' src={logIn} alt='' />
							LogIn
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default TopNavigation;
