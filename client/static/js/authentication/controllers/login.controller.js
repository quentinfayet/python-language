function LoginController ($location, $scope, Authentication, Notification) {
    var vm = this;

    vm.login = login;

    function login () {

    }
}

angular.module('Language.Authentication.controllers')
    .controller('LoginController', ['$location', '$scope', 'Authentication', 'Notification', LoginController]);
