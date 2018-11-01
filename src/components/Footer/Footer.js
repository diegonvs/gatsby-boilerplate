import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container-fluid container-fluid-max-lg">
                <div className="row">
                    <div className="col-lg text-center text-lg-left mb-4 mb-lg-0">
                        <img className="logo" alt="liferay logo" src="/images/liferayLogo.png" />

                        <div className="clearfix d-lg-none"></div>

                        Brought to you by <a href="http://www.liferay.com" className="font-weight-bold"  target="_blank" rel="noopener noreferrer">Liferay, Inc.</a>
                    </div>

                    <div className="col-lg text-center text-lg-right">
                        <div>Powered by <a href="https://wedeploy.com/" className="font-weight-bold"  target="_blank" rel="noopener noreferrer">WeDeploy™</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;