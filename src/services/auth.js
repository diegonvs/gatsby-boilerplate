import WeDeploy from 'wedeploy';

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
    isBrowser() && window.localStorage.getItem("gatsbyUser")
        ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
        : {};

const setUser = user => window.localStorage.setItem("gatsbyUser", JSON.stringify(user));

const auth = WeDeploy.auth(process.env.WEDEPLOY_AUTH_SERVICE_URL);

export const handleLogin = ({ email, password }) => {
    console.log(email, password);

    console.log(auth.currentUser);

    if (auth.currentUser) {
        return setUser({
            email: auth.currentUser.email,
            password: auth.currentUser.password,
        });
    }

    if (!email.endsWith('@liferay.com')) {
        return false;
    }

    auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user);
            return setUser({
                email: auth.currentUser.email,
                password: auth.currentUser.password,
            });
        })
        .catch(() => {
            alert('Sign-in failed.');
        });

        return false;
}

export const isLoggedIn = () => {
    let currentUser = auth.currentUser;

    if (currentUser) {
        return true;
    }

    return false;
}

export const logout = callback => {
    setUser({});
    auth
        .signOut()
        .then(function () {
            alert('User is signed out!');
        })
        .catch(function (err) {
            alert(err);
        });
    callback();
}