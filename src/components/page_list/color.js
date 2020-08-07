import React from 'react';

import '../style.scss';
import Helmet from '../helmet';
import ColorLayout from '../colorLayout';

const Color = ({ children }) => (
	<div class="global" >
		<Helmet />
		<ColorLayout />
	</div>
);

export default Color;
