angular
    .module('language.authentication.services', ['ngCookies'])
    .factory('Authentication', ['$cookies', '$http', Authentication]);

function Authentication($cookies, $http) {
    var authentication = {
        register: register
    };

    return authentication;

    function register(email, password, username) {
        return $http.post('/api/v1/accounts/', {
            username: username,
            password: password,
            email: email
        });
    }
}
