import React, { Fragment } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
import TopNavigation from '../TopNavigation/TopNavigation';
import Footer from '../Footer/Footer';
const Contact = () => {
	return (
		<div>
			<TopNavigation></TopNavigation>
			<section className='contact-section'>
				<Fragment>
					<Container className='mt-5'>
						<Row>
							<Col lg={6} md={6} sm={12}>
								<h1 className='contact-us '>
									যে কোন তথ্য জানতে ফর্মটি পূরণ করুন
								</h1>
								<Form>
									<Form.Group>
										<Form.Label className='contact-details'>
											নাম *
										</Form.Label>
										<Form.Control type='text' />
									</Form.Group>
									<Form.Group>
										<Form.Label className='contact-details'>
											ইমেইল *
										</Form.Label>
										<Form.Control type='email' />
									</Form.Group>
									<Form.Group>
										<Form.Label className='contact-details'>
											বার্তা *
										</Form.Label>
										<Form.Control as='textarea' rows={3} />
									</Form.Group>

									<Button
										className='submit-btn'
										variant='primary'
										type='submit'>
										Submit
									</Button>
								</Form>
							</Col>
							<Col lg={6} md={6} sm={12}>
								<h1 className='contact-us '>Discuss Now</h1>
								<p className='contact-details'>
									House# 1, Road# 1, 5th Floor, Shyamoli, -1207,
									Sher-e-Bangla Nagar, Dhaka
								</p>
								<p className='contact-details'>
									<FontAwesomeIcon id='email-id' icon={faEnvelope} />
									biplobbms@gmail.com
								</p>
								<p className='contact-details'>
									<FontAwesomeIcon icon={faPhone} /> +8801700000000
								</p>
							</Col>
						</Row>
					</Container>
				</Fragment>
			</section>
			<Footer></Footer>
		</div>
	);
};

export default Contact;
