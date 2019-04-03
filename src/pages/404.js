import React from 'react';
import { withPrefix } from 'gatsby';

const ErrorPage = () => (
    <>
        <div className="container-fluid container-fluid-max-lg">
            <img className="image-fluid" alt="not found" src={withPrefix("images/ray.png")}></img>
            <h1 className="h1">Not Found</h1>
        </div>
    </>
);

export default ErrorPage;