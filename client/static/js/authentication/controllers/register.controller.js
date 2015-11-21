require('../services/authentication.service');

function RegistrationController ($location, $scope, Authentication, Notification) {
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

angular.module('Language.Authentication.controllers', ['Language.Authentication.services', 'ui-notification'])
.controller('RegistrationController', ['$location', '$scope', 'Authentication', 'Notification', RegistrationController]);
