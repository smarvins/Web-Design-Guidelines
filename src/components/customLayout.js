import React from 'react';
import './style.scss';
import Footer from './footer';
import { Link } from "gatsby"

const CustomLayout = ({ siteTitle }) => (
	<section className="header-intro hero is-fullheight-with-navbar is-large ">
		<Link to="/" class="title is-4">STEVE MARVINS</Link>
		<div class="hero-body-padding">
			<div class="columns">
			  <div class="column is-one-quarter">
	 	     	<div class="container has-text-centered align-1">
						<div class="has-text-left">
							<p class="title is-1">Layout</p>
						</div>
			    </div>
			  </div>
				<div class="column is-narrow">
					<div class="number-box">
							<p class="number-size">01</p>
					</div>
				</div>
			  <div class="column">
				   <div class="container">
				     <p class="subtitle is-4">The first approach is to understand the user's method on reaching the desired site whether mobile or desktop.<br/><br/>Then build the layout from that information from sites like Figma or Canva to give the proper idea of how we should build the site to achieve the best performance.</p>
				   </div>
			  </div>
			</div>
		</div>
	<Footer	/>

	</section>
);

export default CustomLayout;
