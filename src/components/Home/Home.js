import React from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import TopNavigation from '../TopNavigation/TopNavigation';
import './Home.css';
const Home = () => {
	return (
		<>
			<TopNavigation></TopNavigation>
			<div className='main-class'>
				<h1>
					দু’জনের পারস্পরিক ভালোবাসা স্থাপনের <br /> জন্য বিবাহের বিকল্প
					নেই।
				</h1>
				<p className='para-1'>ইবনু মাজাহ-১৮৪৭</p>
				<Container>
					<Row>
						<Col lg={2} md={4} sm={12}>
							<h5>বায়োডাটার ধরণ</h5>
							<Form.Select aria-label='Default select example'>
								<option>যেকোন বায়োডাটা</option>
								<option value='পাত্রের বায়োডাটা'>
									পাত্রের বায়োডাটা
								</option>
								<option value='পাত্রীর বায়োডাটা'>
									পাত্রীর বায়োডাটা
								</option>
							</Form.Select>
						</Col>
						<Col lg={2} md={4} sm={12}>
							<h5>বৈবাহিক অবস্থা</h5>
							<Form.Select aria-label='Default select example'>
								<option>যেকোন অবস্থা</option>
								<option value='অবিবাহিত'>অবিবাহিত</option>
								<option value='বিবাহিত'>বিবাহিত</option>
								<option value='ডিভোর্সড'>ডিভোর্সড</option>
								<option value='বিধবা'>বিধবা</option>
								<option value='বিপত্নীক'>বিপত্নীক</option>
							</Form.Select>
						</Col>
						<Col lg={2} md={4} sm={12}>
							<h5>বয়স</h5>
							<Form.Select aria-label='Default select example'>
								<option>যেকোন বয়স</option>
								<option value='1-20'>২০-এর মধ্যে</option>
								<option value='21-25'>২৫-এর মধ্যে</option>
								<option value='26-30'>৩০-এর মধ্যে</option>
								<option value='31-35'>৩৫-এর মধ্যে</option>
								<option value='36-40'>৪০-এর মধ্যে</option>
								<option value='41-50'>৫০-এর মধ্যে</option>
								<option value='51-100'>৫০+</option>
							</Form.Select>
						</Col>
						<Col lg={2} md={4} sm={12}>
							<h5>ক্যাটাগরি</h5>
							<Form.Select aria-label='Default select example'>
								<option>সব ক্যাটাগরি</option>
								<option value='ইঞ্জিনিয়ার'>ইঞ্জিনিয়ার</option>
								<option value='ডাক্তার'>ডাক্তার</option>
								<option value='সরকারি'>সরকারি চাকুরীজীবী</option>
								<option value='বে'>বেসরকারি চাকুরীজীবী</option>
								<option value='শিক্ষক'>শিক্ষক</option>
								<option value='ব্যবসায়ী'>ব্যবসায়ী</option>
								<option value='হাফেজ-হাফেজা'>হাফেজ-হাফেজা</option>
								<option value='আলেম-আলেমা'>আলেম-আলেমা</option>
								<option value='ফরেন সিটিজেন'>ফরেন সিটিজেন</option>
								<option value='প্রবাসী'>প্রবাসী</option>
								<option value='ছাত্র'>ছাত্র</option>
								<option value='এতিম-অসহায়'>এতিম-অসহায়</option>
								<option value='মাসনা/সুলাসা/রুবায়া'>
									মাসনা/সুলাসা/রুবায়া
								</option>
								<option value='ফ্রিল্যান্সার'>ফ্রিল্যান্সার</option>
								<option value='অন্যান্য'>অন্যান্য</option>
							</Form.Select>
						</Col>
						<Col lg={2} md={4} sm={12}>
							<h5>বিভাগ</h5>
							<Form.Select aria-label='Default select example'>
								<option value=''>সব বিভাগ</option>
								<option value='ঢাকা'>ঢাকা</option>
								<option value='চট্টগ্রাম'>চট্টগ্রাম</option>
								<option value='রাজশাহী'>রাজশাহী</option>
								<option value='সিলেট'>সিলেট</option>
								<option value='খুলনা'>খুলনা</option>
								<option value='বরিশাল'>বরিশাল</option>
								<option value='রংপুর'>রংপুর</option>
								<option value='ময়মনসিংহ'>ময়মনসিংহ</option>
							</Form.Select>
						</Col>
						<Col lg={2} md={4} sm={12}>
							<h5>জেলা</h5>
							<Form.Select aria-label='Default select example'>
								<option value=''>সব জেলা</option>
							</Form.Select>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Home;