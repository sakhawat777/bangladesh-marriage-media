import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import TopNavigation from '../TopNavigation/TopNavigation';
import './CreateBiodata2.css';
const CreateBiodata2 = () => {
	return (
		<div>
			<TopNavigation></TopNavigation>
			<section className='page2-section'>
				<Container>
					<Row>
						<>
							<b>
								<h2>ব্যক্তিগত তথ্য</h2>
							</b>
						</>
						<b>
							<p>পাত্রের পূর্নাঙ্গ নাম (গোপন রাখা হবে) *</p>
						</b>
						<input
							type='text'
							name=''
							id=''
							placeholder='পাত্রের নাম লিখুন'
						/>
						<p>
							নাম নেয়া হচ্ছে ভেরিফিকেশনের জন্য, পূর্ণ নাম লিখবেন। আপনার
							নাম পাবলিকলি প্রকাশ করা হবে না।
						</p>
						<b>
							<p>বিভাগ (স্থায়ী) *</p>
						</b>
						<Form.Select
							name='division'
							id='division'
							aria-label='Default select example'>
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
						<b>
							<p>জেলা (স্থায়ী) *</p>
						</b>
						<Form.Select
							name='district'
							id='district'
							aria-label='Default select example'>
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
							<option value='ব্রাহ্মণবাড়িয়া'>ব্রাহ্মণবাড়িয়া</option>
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
							<option value='চাঁপাইনবাবগঞ্জ'>চাঁপাইনবাবগঞ্জ</option>
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
							<option value=''>নির্বাচন করুন</option>
							<option value='রংপুর'>রংপুর</option>
							<option value='গাইবান্ধা'>গাইবান্ধা</option>
							<option value='দিনাজপুর'>দিনাজপুর</option>
							<option value='লালমনিরহাট'>লালমনিরহাট</option>
							<option value='নীলফামারী'>নীলফামারী</option>
							<option value='পঞ্চগড়'>পঞ্চগড়</option>
							<option value='ঠাকুরগাঁও'>ঠাকুরগাঁও</option>
							<option value='কুড়িগ্রাম'>কুড়িগ্রাম</option>
							<option value=''>নির্বাচন করুন</option>
							<option value='ময়মনসিংহ'>ময়মনসিংহ</option>
							<option value='জামালপুর'>জামালপুর</option>
							<option value='নেত্রকোণা'>নেত্রকোণা</option>
							<option value='শেরপুর'>শেরপুর</option>
						</Form.Select>
						<p>
							বিস্তারিত ঠিকানা-গ্রাম/ওয়ার্ড+ইউনিয়ন+পোস্ট
							অফিস/সিটি+থানা+অন্যান্য তথ্য (গোপন থাকবে) *
						</p>
						<textarea
							name='address'
							id='address'
							cols='50'
							rows='5'
							spellcheck='false'></textarea>
						<p>কর্মস্থল (কর্মস্থল না থাকলে নাই লিখুন) *</p>
						<input
							type='text'
							name='jobPlace'
							id='jobPlace'
							placeholder='যেমনঃ ঢাকা'
							className='jobPlace'></input>
						<p>পেশা *</p>
						<Form.Select
							name='occupation2'
							id='occupation'
							aria-label='Default select example'>
							<option value=''>পেশা নির্বাচন করুন</option>
							<option value='ছাত্র'>ছাত্র</option>
							<option value='সরকারি চাকুরীজীবী'>
								সরকারি চাকুরীজীবী
							</option>
							<option value='বেসরকারি চাকুরীজীবী'>
								বেসরকারি চাকুরীজীবী
							</option>
							<option value='ব্যবসা'>ব্যবসা</option>
							<option value='ডাক্তার'>ডাক্তার</option>
							<option value='ইঞ্জিনিয়ার'>ইঞ্জিনিয়ার</option>
							<option value='শিক্ষক'>শিক্ষক</option>
							<option value='ফ্রিল্যান্সার'>ফ্রিল্যান্সার</option>
							<option value='ফরেন সিটিজেন'>ফরেন সিটিজেন</option>
							<option value='প্রবাসী'>প্রবাসী</option>
							<option value='অন্যান্য'>অন্যান্য</option>
							<option value='নেই'>নেই</option>
						</Form.Select>
						<p>পেশা (বিস্তারিত)-(গোপন থাকবে)*</p>
						<textarea
							name='detailOccupation'
							id='detailOccupation'
							cols='50'
							rows='5'></textarea>
						<p>বয়স *</p>
						<Form.Select
							name='age'
							id='age2'
							aria-label='Default select example'>
							<option value=''>বয়স নির্বাচন করুন</option>

							<option value='15'>১৫ বছর</option>

							<option value='16'>১৬ বছর</option>

							<option value='17'>১৭ বছর</option>

							<option value='18'>১৮ বছর</option>

							<option value='19'>১৯ বছর</option>

							<option value='20'>২০ বছর</option>

							<option value='21'>২১ বছর</option>

							<option value='22'>২২ বছর</option>

							<option value='23'>২৩ বছর</option>

							<option value='24'>২৪ বছর</option>

							<option value='25'>২৫ বছর</option>

							<option value='26'>২৬ বছর</option>

							<option value='27'>২৭ বছর</option>

							<option value='28'>২৮ বছর</option>

							<option value='29'>২৯ বছর</option>

							<option value='30'>৩০ বছর</option>

							<option value='31'>৩১ বছর</option>

							<option value='32'>৩২ বছর</option>

							<option value='33'>৩৩ বছর</option>

							<option value='34'>৩৪ বছর</option>

							<option value='35'>৩৫ বছর</option>

							<option value='36'>৩৬ বছর</option>

							<option value='37'>৩৭ বছর</option>

							<option value='38'>৩৮ বছর</option>

							<option value='39'>৩৯ বছর</option>

							<option value='40'>৪০ বছর</option>

							<option value='41'>৪১ বছর</option>

							<option value='42'>৪২ বছর</option>

							<option value='43'>৪৩ বছর</option>

							<option value='44'>৪৪ বছর</option>

							<option value='45'>৪৫ বছর</option>

							<option value='46'>৪৬ বছর</option>

							<option value='47'>৪৭ বছর</option>

							<option value='48'>৪৮ বছর</option>

							<option value='49'>৪৯ বছর</option>

							<option value='50'>৫০ বছর</option>

							<option value='51'>৫১ বছর</option>

							<option value='52'>৫২ বছর</option>

							<option value='53'>৫৩ বছর</option>

							<option value='54'>৫৪ বছর</option>

							<option value='55'>৫৫ বছর</option>

							<option value='56'>৫৬ বছর</option>

							<option value='57'>৫৭ বছর</option>

							<option value='58'>৫৮ বছর</option>

							<option value='59'>৫৯ বছর</option>

							<option value='60'>৬০ বছর</option>

							<option value='61'>৬১ বছর</option>

							<option value='62'>৬২ বছর</option>

							<option value='63'>৬৩ বছর</option>

							<option value='64'>৬৪ বছর</option>

							<option value='65'>৬৫ বছর</option>

							<option value='66'>৬৬ বছর</option>

							<option value='67'>৬৭ বছর</option>

							<option value='68'>৬৮ বছর</option>

							<option value='69'>৬৯ বছর</option>

							<option value='70'>৭০ বছর</option>
						</Form.Select>
						<p>ওজন (কেজি)*</p>
						<input
							type='text'
							name='weight'
							id='weight'
							placeholder='যেমনঃ ৫০ কেজি'
						/>
						<p>উচ্চতা *</p>
						<Col lg={6} md={6} sm={12}>
							<Form.Select aria-label='Default select example'>
								<option value=''>কত ফুট</option>

								<option value='৪'>৪ ফুট</option>

								<option value='৫'>৫ ফুট</option>

								<option value='৬'>৬ ফুট</option>

								<option value='৭'>৭ ফুট</option>
							</Form.Select>
						</Col>
						<Col lg={6} md={6} sm={12}>
							<Form.Select aria-label='Default select example'>
								<option value=''>কত ইঞ্চিঃ</option>

								<option value='০'>০ ইঞ্চিঃ</option>

								<option value='১'>১ ইঞ্চিঃ</option>

								<option value='২'>২ ইঞ্চিঃ</option>

								<option value='৩'>৩ ইঞ্চিঃ</option>

								<option value='৪'>৪ ইঞ্চিঃ</option>

								<option value='৫'>৫ ইঞ্চিঃ</option>

								<option value='৬'>৬ ইঞ্চিঃ</option>

								<option value='৭'>৭ ইঞ্চিঃ</option>

								<option value='৮'>৮ ইঞ্চিঃ</option>

								<option value='৯'>৯ ইঞ্চিঃ</option>

								<option value='১০'>১০ ইঞ্চিঃ</option>

								<option value='১১'>১১ ইঞ্চিঃ</option>
							</Form.Select>
						</Col>
						<p>শিক্ষাগত যোগ্যতা(যেকোন একটি নির্বাচন করুন) *</p>
						<Form.Select aria-label='Default select example'>
							<option value=''>শিক্ষাগত যোগ্যতা নির্বাচন করুন</option>
							<option value='1'>পঞ্চম শ্রেণী পাস</option>
							<option value='2'>অষ্টম শ্রেণী পাস</option>
							<option value='3'>এস এস সি</option>
							<option value='4'>এইচ এস সি</option>
							<option value='5'>অনার্স</option>
							<option value='6'>অনার্স (অধ্যায়নরত)</option>
							<option value='7'>মাস্টার্স</option>
							<option value='8'>মাস্টার্স (অধ্যায়নরত)</option>
							<option value='9'>ডিগ্রি পাস</option>
							<option value='10'>ডিগ্রি (অধ্যায়নরত)</option>
							<option value='11'>এমবিবিএস</option>
							<option value='12'>এমবিবিএস (অধ্যায়নরত)</option>
							<option value='13'>ইঞ্জিনিয়ারিং</option>
							<option value='14'>ইঞ্জিনিয়ারিং (অধ্যায়নরত)</option>
							<option value='27'>ডিপ্লোমা</option>
							<option value='28'>ডিপ্লোমা (অধ্যায়নরত)</option>
							<option value='29'>নার্সিং</option>
							<option value='30'>নার্সিং (অধ্যায়নরত)</option>
							<option value='15'>হাফেজ</option>
							<option value='16'>হাফেজ (অধ্যায়নরত)</option>
							<option value='17'>আলেম</option>
							<option value='18'>আলেম (অধ্যায়নরত)</option>
							<option value='19'>দাখিল পাস</option>
							<option value='20'>দাখিল (অধ্যায়নরত)</option>
							<option value='21'>আলিম</option>
							<option value='22'>আলিম (অধ্যায়নরত)</option>
							<option value='23'>ফাজিল</option>
							<option value='24'>ফাজিল (অধ্যায়নরত)</option>
							<option value='25'>কামিল</option>
							<option value='26'>কামিল (অধ্যায়নরত)</option>
						</Form.Select>
						<p>
							শিক্ষা (বিস্তারিত সব শিক্ষা,পাশের
							সাল,বিভাগ/সাবজেক্ট,রেজাল্ট,প্রতিষ্ঠানের নাম) (গোপন থাকবে) *
						</p>
						<textarea
							name='study'
							id='study'
							cols='50'
							rows='5'></textarea>
						<p>গায়ের রং *</p>
						<Form.Select aria-label='Default select example'>
							<option value=''>গায়ের রং নির্বাচন করুন</option>
							<option value='উজ্জ্বল ফর্সা'>উজ্জ্বল ফর্সা</option>
							<option value='ফর্সা'>ফর্সা</option>
							<option value='উজ্জ্বল শ্যামলা'>উজ্জ্বল শ্যামলা</option>
							<option value='শ্যামলা'>শ্যামলা</option>
							<option value='কালো'>কালো</option>
						</Form.Select>
						<p>বৈবাহিক অবস্থা *</p>
						<Form.Select aria-label='Default select example'>
							<option value=''>বৈবাহিক অবস্থা নির্বাচন করুন</option>
							<option value='অবিবাহিত'>অবিবাহিত</option>
							<option value='বিবাহিত'>বিবাহিত</option>
							<option value='ডিভোর্সড'>ডিভোর্সড</option>
							<option value='বিধবা'>বিধবা</option>
							<option value='বিপত্নীক'>বিপত্নীক</option>
						</Form.Select>
						<p>মাসিক আয়/বেতন</p>
						<input
							type='text'
							name='monthlySalary'
							id='monthlySalary'
							placeholder='মাসিক আয়/বেতন লিখুনঃ ২৫ হাজার'
						/>
						<button
							type='button'
							className='btn btn-primary but'
							id='btn1'>
							Submit
						</button>
					</Row>
				</Container>
			</section>
			<Footer></Footer>
		</div>
	);
};

export default CreateBiodata2;
