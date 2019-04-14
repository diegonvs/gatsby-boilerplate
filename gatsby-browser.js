const netlifyIdentity = require('netlify-identity-widget');
const netlifyApiUrl = process.env.NETLIFY_IDENTITY_API_URL;
require('./src/styles/main.scss');

// A stub function is needed because gatsby won't load this file otherwise
// (https://github.com/gatsbyjs/gatsby/issues/6759)
exports.onClientEntry = () => {};

exports.onInitialClientRender = () => {
    if (netlifyApiUrl !== "") {
        netlifyIdentity.init({
            // Absolute url to endpoint.  ONLY USE IN SPECIAL CASES!
            // See https://github.com/netlify/netlify-identity-widget/#netlifyidentityinitopts
            APIUrl: netlifyApiUrl
        });
    } else {
        netlifyIdentity.init();
    }
    window.netlifyIdentity = netlifyIdentity
}