import React from 'react';
import './style.scss';
import Footer from './footer';
import { Link } from "gatsby"

const FontLayout = ({ siteTitle }) => (
	<section className="header-intro hero is-fullheight-with-navbar is-large ">
		<Link to="/" class="title is-4">STEVE MARVINS</Link>
		<div class="hero-body-padding">
			<div class="columns">
			  <div class="column is-one-quarter">
	 	     	<div class="container has-text-centered align-1">
						<div class="has-text-left">
							<p class="title is-1">Font</p>
						</div>
			    </div>
			  </div>
				<div class="column is-narrow">
					<div class="number-box">
							<p class="number-size">03</p>
					</div>
				</div>
			  <div class="column">
				   <div class="container">
				     <p class="subtitle is-4">Based on whether the project is headed towards mobile-first or a desktop first design. <br/> Color also affects the type of typography to be used. Most of the fonts I collect comes from <a href="https://fonts.google.com/">Google Fonts</a>.</p>
				   </div>
			  </div>
			</div>
		</div>
	<Footer	/>

	</section>
);

export default FontLayout;
