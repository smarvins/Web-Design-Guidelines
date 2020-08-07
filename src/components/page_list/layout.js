import React from 'react';

import '../style.scss';
import Helmet from '../helmet';
import Header from '../header';

const Layout = ({ children }) => (
	<div class="global" >
		<Helmet />
		<Header />
	</div>
);

export default Layout;
