import {withPrefix} from 'gatsby';
import React from 'react';

const ErrorPage = () => (
	<>
		<div className="container-fluid container-fluid-max-lg">
			<img
				alt="not found"
				className="image-fluid"
				src={withPrefix('images/ray.png')}
			></img>
			<h1 className="h1">Not Found</h1>
		</div>
	</>
);

export default ErrorPage;
