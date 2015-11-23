function RegistrationController ($scope, Authentication, Notification) {
    var vm = this;

    vm.register = register;

    function register () {
        Authentication.register(vm.email, vm.password, vm.username).then(function successCallback(response) {
            console.log(response);
        }, function errorCallback(error) {
            Notification.error('Whoops! An error occurred while registering the account.');
        })
    }
}

angular.module('Language.Authentication.controllers')
.controller('RegistrationController', ['$scope', 'Authentication', 'Notification', RegistrationController]);
