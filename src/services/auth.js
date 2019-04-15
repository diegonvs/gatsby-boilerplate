import netlifyIdentity from 'netlify-identity-widget';

export const isBrowser = () => typeof window !== "undefined"

// handle login & signup
export const handleLogin = () => {
    return new Promise((resolve, reject) => {
        if (isLoggedIn()) {
            resolve();
        } else {
            netlifyIdentity.open();
            netlifyIdentity.on('login', user => {
                netlifyIdentity.close();
                resolve();
            });
        }
        netlifyIdentity.on('error', err => {
            reject(err);
        });
    });
}

export const isLoggedIn = () => {
    return !!netlifyIdentity.currentUser();
}

export const logout = () => {
    return new Promise((resolve, reject) => {
        netlifyIdentity.logout();
        netlifyIdentity.on('logout', () => {
            resolve();
        });
    });
}