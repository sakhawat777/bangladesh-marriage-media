import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
	return (
		<div>
			<footer className='footer-section'>
				<Container>
					<div>
						<p>
							আমাদের সাথে যোগাযোগ করুন- <br />
							01700000000, 01800000000, 01600000000 (Whatsapp). <br />
							আমাদের ফেসবুক পেইজ -
							<a href='https://www.facebook.com/'>
								বাংলাদেশ ম্যারেজ মিডিয়া
							</a>
							<br />
							Perfect Marriage Media <br />
							ফেসবুক গ্রুপ -
							<a href='https://www.facebook.com/'>
								বাংলাদেশ ম্যারেজ মিডিয়া
							</a>
							<br />
							ইমেইল আইডি - <a href='bmm@gmail.com'>bmm@gmail.com</a>
						</p>
						<p>© 2021 bangladeshmarriagemedia.com</p>
					</div>
				</Container>
			</footer>
		</div>
	);
};

export default Footer;
