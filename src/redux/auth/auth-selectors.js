const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getFetchingCurrentUser = state => state.auth.isfetchCurrentUser;

const authSelectors = {
    getIsLoggedIn,
    getUsername,
    getFetchingCurrentUser,
};

export default authSelectors;