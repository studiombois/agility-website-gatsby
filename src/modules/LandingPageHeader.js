import React from 'react';
import { renderHTML } from '../agility/utils'

import "./LandingPageHeader.scss"

const LandingPageHeader = ({ item }) => {

	item = item.customFields;

	let sectionStyle = {
		backgroundImage: 'url(' + item.backgroundImage.url + ')',
	};

	return (

		// <Parallax
		//     blur={0}
		//     bgImage={item.backgroundImage.url}
		//     bgImageAlt=""
		//     strength={1000}
		// ></Parallax>

		<section style={sectionStyle} className="landing-page-header">
			<div className="container-my">
				<div className="header-content">
					<div className="logo"><img src={ item.logo.url } alt={item.logo.label} /></div>
					<div className="content" dangerouslySetInnerHTML={renderHTML(item.headerContent)}></div>
					<div className="button"><a href={item.primaryButton.href} target={item.primaryButton.target} className="btn btn-outline">{item.primaryButton.text}</a></div>
				</div>
			</div>
		</section>




	);
}

export default LandingPageHeader;
