import React from 'react';

import '../style.scss';
import Helmet from '../helmet';
import FontLayout from '../fontLayout';

const Font = ({ children }) => (
	<div class="global" >
		<Helmet />
		<FontLayout />
	</div>
);

export default Font;
