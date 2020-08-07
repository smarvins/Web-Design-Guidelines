import React from 'react';
import './style.scss';
import Footer from './footer';
import { Link } from "gatsby"

const ColorLayout = ({ siteTitle }) => (
	<section className="header-intro hero is-fullheight-with-navbar is-large ">
		<Link to="/" class="title is-4">STEVE MARVINS</Link>
		<div class="hero-body-padding">
			<div class="columns">
			  <div class="column is-one-quarter">
	 	     	<div class="container has-text-centered align-1">
						<div class="has-text-left">
							<p class="title is-1">Color</p>
						</div>
			    </div>
			  </div>
				<div class="column is-narrow">
					<div class="number-box">
							<p class="number-size">02</p>
					</div>
				</div>
			  <div class="column">
				   <div class="container">
				     <p class="subtitle is-4">This will be heavily dependent on the following key points: <br/>
							 <br/>•Layout design of the project.
							 <br/>•Targeted audience.
							 <br/>•The vision of the business/project itself.
						  </p>
						 <p class="subtitle is-4">After this, a color combo from 2 to 4 is recommended, sources like <a href="https://colorhunt.co/">ColorHunt</a> is a wonderful place to start.</p>
				   </div>
			  </div>
			</div>
		</div>
	<Footer	/>

	</section>
);

export default ColorLayout;
