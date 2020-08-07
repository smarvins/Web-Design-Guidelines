import React from 'react';
import './style.scss';
import Footer from './footer';
import { Link } from "gatsby"

const ContactLayout = ({ siteTitle }) => (
	<section className="header-intro hero is-fullheight-with-navbar is-large ">
		<Link to="/" class="title is-4">STEVE MARVINS</Link>
		<div class="hero-body-padding">
			<div class="columns">
			  <div class="column is-one-quarter">
	 	     	<div class="container has-text-centered align-1">
						<div class="has-text-left">
							<p class="title is-1">Contact</p>
						</div>
			    </div>
			  </div>
				<div class="column is-narrow">
					<div class="number-box">
							<p class="number-size">04</p>
					</div>
				</div>
			  <div class="column">
				   <div class="container">
				     <p class="subtitle is-4">You can pretty much reach me anytime by contacting me through my <a href="http://www.stevemarvins.dev@gmail.com/">email</a> <br/> or visit my <a href="www.linkedin.com/in/stevemarvins-dev">LinkedIn page</a> for more :)</p>
						 <p class="subtitle is-4">Wanna have a look at my <a href="https://shavolski.github.io/Showcase/">portfolio?</a></p>
				   </div>
			  </div>
			</div>
		</div>
	<Footer	/>

	</section>
);

export default ContactLayout;
