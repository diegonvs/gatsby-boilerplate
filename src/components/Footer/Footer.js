import {withPrefix} from 'gatsby';
import React from 'react';

const Footer = () => {
	return (
		<div className="footer">
			<div className="container-fluid container-fluid-max-lg">
				<div className="row">
					<div className="col-lg mb-4 mb-lg-0 text-center text-lg-left">
						<img
							alt="liferay logo"
							className="logo"
							src={withPrefix('images/liferayLogo.png')}
						/>
						<div className="clearfix d-lg-none"></div>
						Brought to you by{' '}
						<a
							className="font-weight-bold"
							href="http://www.liferay.com"
							rel="noopener noreferrer"
							target="_blank"
						>
							Liferay, Inc.
						</a>
					</div>

					<div className="col-lg text-center text-lg-right">
						<div>
							Powered by{' '}
							<a
								className="font-weight-bold"
								href="https://wedeploy.com/"
								rel="noopener noreferrer"
								target="_blank"
							>
								WeDeploy™
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
