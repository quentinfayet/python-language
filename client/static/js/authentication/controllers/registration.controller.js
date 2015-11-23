function RegistrationController ($scope, $location, Authentication, Notification) {
    var vm = this;

    vm.register = register;

    function register () {
        Authentication.register(vm.email, vm.password, vm.username).then(function successCallback(response) {
            $location.path('/');
        }, function errorCallback(error) {
            Notification.error('Whoops! An error occurred while registering the account.');
        })
    }
}

angular.module('Language.Authentication.controllers')
.controller('RegistrationController', ['$scope', '$location', 'Authentication', 'Notification', RegistrationController]);
