import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import TopNavigation from '../TopNavigation/TopNavigation';
import './CreateBiodata.css';
const CreateBiodata = () => {
	const navigate = useNavigate();
	const btnHandleClick = () => {
		const url = `/create-biodata/page2`;
		navigate(url);
	};
	return (
		<div>
			<TopNavigation></TopNavigation>
			<section className='bio-data-section'>
				<Container className='container'>
					<h1>ব্যক্তিগত তথ্য</h1>
					<div>
						<Row>
							<Col lg={12} md={12} sm={12}>
								<p>
									<b>
										আপনি আল্লাহর নামে প্রতিশ্রুতি/ওয়াদা করছেন কি আপনি
										সব সত্য তথ্য দিবেন ফর্মে? *
									</b>
								</p>
								<Form.Select aria-label='Default select example'>
									<option value='ইনশাআল্লাহ হ্যাঁ'>
										ইনশাআল্লাহ হ্যাঁ
									</option>
									<option value='না'>না</option>
									<option value='চেষ্টা করব'>চেষ্টা করব</option>
								</Form.Select>
							</Col>
						</Row>
					</div>
				</Container>
				<Container className='container'>
					<div>
						<Row>
							<Col lg={12} md={12} sm={12}>
								<p>
									<b>বায়োডাটার ধরণ *</b>
								</p>
								<Form.Select aria-label='Default select example'>
									<option value=''>বায়োডাটার ধরণ</option>
									<option value='1'>পাত্রের বায়োডাটা</option>
									<option value='2'>পাত্রীর বায়োডাটা</option>
								</Form.Select>
							</Col>
						</Row>
						<button
							onClick={btnHandleClick}
							type='button'
							class='btn btn-primary but'
							id='btn1'>
							Next
						</button>
					</div>
				</Container>
			</section>
			<Footer></Footer>
		</div>
	);
};

export default CreateBiodata;
