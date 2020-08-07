import React from 'react';

import '../style.scss';
import Helmet from '../helmet';
import ContactLayout from '../contactLayout';

const Contact = ({ children }) => (
	<div class="global" >
		<Helmet />
		<ContactLayout />
	</div>
);

export default Contact;
