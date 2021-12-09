import React from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import TopNavigation from '../TopNavigation/TopNavigation';
import './Home.css';
const Home = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		const url = `/tutorial`;
		navigate(url);
	};
	const bioDataHandleClick = () => {
		const url = `/create-biodata`;
		navigate(url);
	};
	return (
		<>
			<TopNavigation></TopNavigation>
			<section className='main-class'>
				<div>
					<h1>
						দু’জনের পারস্পরিক ভালোবাসা স্থাপনের <br /> জন্য বিবাহের বিকল্প
						নেই।
					</h1>
					<p className='para-1'>ইবনু মাজাহ-১৮৪৭</p>
				</div>
				<div>
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
									<option value='ঢাকা'>ঢাকা</option>
									<option value='ফরিদপুর'>ফরিদপুর</option>
									<option value='গাজীপুর'>গাজীপুর</option>
									<option value='গোপালগঞ্জ'>গোপালগঞ্জ</option>
									<option value='কিশোরগঞ্জ'>কিশোরগঞ্জ</option>
									<option value='মাদারীপুর'>মাদারীপুর</option>
									<option value='মানিকগঞ্জ'>মানিকগঞ্জ</option>
									<option value='মুন্সিগঞ্জ'>মুন্সিগঞ্জ</option>
									<option value='নারায়ণগঞ্জ'>নারায়ণগঞ্জ</option>
									<option value='নরসিংদী'>নরসিংদী</option>
									<option value='রাজবাড়ী'>রাজবাড়ী</option>
									<option value='শরীয়তপুর'>শরীয়তপুর</option>
									<option value='টাঙ্গাইল'>টাঙ্গাইল</option>
									<option value='চট্টগ্রাম'>চট্টগ্রাম</option>
									<option value='কুমিল্লা'>কুমিল্লা</option>
									<option value='নোয়াখালী'>নোয়াখালী</option>
									<option value='ব্রাহ্মণবাড়িয়া'>
										ব্রাহ্মণবাড়িয়া
									</option>
									<option value='চাঁদপুর'>চাঁদপুর</option>
									<option value='ফেনী'>ফেনী</option>
									<option value='লক্ষ্মীপুর'>লক্ষ্মীপুর</option>
									<option value='কক্সবাজার'>কক্সবাজার</option>
									<option value='খাগড়াছড়ি'>খাগড়াছড়ি</option>
									<option value='রাঙ্গামাটি'>রাঙ্গামাটি</option>
									<option value='বান্দরবান'>বান্দরবান</option>

									<option value='রাজশাহী'>রাজশাহী</option>
									<option value='পাবনা'>পাবনা</option>
									<option value='বগুড়া'>বগুড়া</option>
									<option value='নাটোর'>নাটোর</option>
									<option value='জয়পুরহাট'>জয়পুরহাট</option>
									<option value='চাঁপাইনবাবগঞ্জ'>
										চাঁপাইনবাবগঞ্জ
									</option>
									<option value='সিরাজগঞ্জ'>সিরাজগঞ্জ</option>
									<option value='নওগাঁ'>নওগাঁ</option>
									<option value='সিলেট'>সিলেট</option>
									<option value='সুনামগঞ্জ'>সুনামগঞ্জ</option>
									<option value='মৌলভীবাজার'>মৌলভীবাজার</option>
									<option value='হবিগঞ্জ'>হবিগঞ্জ</option>
									<option value='খুলনা'>খুলনা</option>
									<option value='কুষ্টিয়া'>কুষ্টিয়া</option>
									<option value='যশোর'>যশোর</option>
									<option value='মাগুরা'>মাগুরা</option>
									<option value='ঝিনাইদহ'>ঝিনাইদহ</option>
									<option value='চুয়াডাঙ্গা'>চুয়াডাঙ্গা</option>
									<option value='বাগেরহাট'>বাগেরহাট</option>
									<option value='মেহেরপুর'>মেহেরপুর</option>
									<option value='নড়াইল'>নড়াইল</option>
									<option value='সাতক্ষীরা'>সাতক্ষীরা</option>
									<option value='বরিশাল'>বরিশাল</option>
									<option value='ভোলা'>ভোলা</option>
									<option value='বরগুনা'>বরগুনা</option>
									<option value='ঝালকাঠি'>ঝালকাঠি</option>
									<option value='পটুয়াখালী'>পটুয়াখালী</option>
									<option value='পিরোজপুর'>পিরোজপুর</option>
									<option value='রংপুর'>রংপুর</option>
									<option value='গাইবান্ধা'>গাইবান্ধা</option>
									<option value='দিনাজপুর'>দিনাজপুর</option>
									<option value='লালমনিরহাট'>লালমনিরহাট</option>
									<option value='নীলফামারী'>নীলফামারী</option>
									<option value='পঞ্চগড়'>পঞ্চগড়</option>
									<option value='ঠাকুরগাঁও'>ঠাকুরগাঁও</option>
									<option value='কুড়িগ্রাম'>কুড়িগ্রাম</option>
									<option value='ময়মনসিংহ'>ময়মনসিংহ</option>
									<option value='জামালপুর'>জামালপুর</option>
									<option value='নেত্রকোণা'>নেত্রকোণা</option>
									<option value='শেরপুর'>শেরপুর</option>
								</Form.Select>
							</Col>
						</Row>
						<div className='input-bio'>
							<Row>
								<Col lg={12} md={12} sm={12}>
									<input
										className='bio-search'
										id='submit'
										type='submit'
										value='বায়োডাটা খুজুন'
									/>
								</Col>
							</Row>
						</div>
					</Container>
				</div>
				<section>
					<Container>
						<Row>
							<h5 id='bio-header'>বায়োডাটা কোড</h5>

							<Col lg={8} md={8} sm={12}>
								<Container>
									<Row>
										<input
											className='code'
											id='code'
											name='code'
											type='text'
											placeholder='বায়োডাটা কোড লিখুন(বাংলায়, যেমনঃ ১০১০)'
										/>
									</Row>
								</Container>
							</Col>

							<Col lg={4} md={4} sm={12}>
								<Container>
									<Row>
										<input
											className='bio-search'
											id='submit'
											type='submit'
											value='কোড দিয়ে বায়োডাটা খুজুন'
										/>
									</Row>
								</Container>
							</Col>
						</Row>
					</Container>
				</section>
				<section>
					<section className='bio-button-section'>
						<Container>
							<Row>
								<Col lg={6} md={6} sm={12}>
									<Container>
										<Row>
											<button onClick={handleClick}>
												বায়োডাটা তৈরি ও সার্চ(ভিডিও)
											</button>
										</Row>
									</Container>
								</Col>
								<Col lg={6} md={6} sm={12}>
									<Container>
										<Row>
											<button onClick={bioDataHandleClick}>
												আপনার বায়োডাটা তৈরি করুন
											</button>
										</Row>
									</Container>
								</Col>
							</Row>
						</Container>
					</section>
				</section>
			</section>
			<section id='home-bio-data'>
				<Container>
					<Row>
						<h3>পাত্র-পাত্রীর বায়োডাটা</h3>
					</Row>
				</Container>
			</section>

			<Footer></Footer>
		</>
	);
};

export default Home;
