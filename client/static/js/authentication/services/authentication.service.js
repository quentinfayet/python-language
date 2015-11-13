angular
    .module('language.authentication.services', ['ngCookies'])
    .factory('Authentication', ['$cookies', '$http', Authentication]);

function Authentication($cookies, $http) {
    var authentication = {
        register: register,
        login: login,
        getAuthenticatedAccount: getAuthenticatedAccount,
        isAuthenticated: isAuthenticated,
        setAuthenticatedAccount: setAuthenticatedAccount,
        unauthenticate: unauthenticate
    };

    return authentication;

    function unauthenticate() {
        delete $cookies.authenticatedAccount;
    }

    function setAuthenticatedAccount(account) {
        $cookies.authenticatedAccount = JSON.stringify(account);
    }

    function isAuthenticated() {
        return !!$cookies.authenticatedAccount;
    }

    function getAuthenticatedAccount() {
        if (!$cookies.authenticatedAccount) {
            return;
        }

        return JSON.parse($cookies.authenticatedAccount);
    }

    function login(email, password) {
        return $http.post('/api/v1/auth/login/', {
            email: email,
            password: password
        }).then(loginSuccess, loginError);

        function loginSuccess(data, status, headers, config) {
            Authentication.setAuthenticatedAccount(data.data);
            windows.location = '/';
        }

        function loginError(data, status, headers, config) {
            console.error('Failed to authenticate');
        }
    }

    function register(email, password, username) {
        return $http.post('/api/v1/accounts/', {
            username: username,
            password: password,
            email: email
        });
    }
}

