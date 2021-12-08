import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import TopNavigation from '../TopNavigation/TopNavigation';
import './CreateBiodata2.css';
const CreateBiodata2 = () => {
	return (
		<div>
			<TopNavigation></TopNavigation>
			<section className='bio-data-section'>
				<Container>
					<p id='error'>অনুগ্রহ করে (*) অবশ্য পূরণীয় ঘরগুলো পূরণ করুন</p>
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
						</Form.Select>
					</Row>
				</Container>
			</section>
			<Footer></Footer>
		</div>
	);
};

export default CreateBiodata2;
