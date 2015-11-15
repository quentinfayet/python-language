require('../services/authentication.service');

function RegistrationController ($location, $scope, Authentication) {
    var vm = this;

    vm.register = register;

    function register () {
        Authentication.register(vm.email, vm.password, vm.username);
    }
}

angular.module('Language.Authentication.controllers', ['Language.Authentication.services'])
.controller('RegistrationController', ['$location', '$scope', 'Authentication', RegistrationController]);
