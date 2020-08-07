import React from 'react';

import '../style.scss';
import Helmet from '../helmet';
import CustomLayout from '../customLayout';

const DesignLayout = ({ children }) => (
	<div class="global" >
		<Helmet />
		<CustomLayout />
	</div>
);

export default DesignLayout;
