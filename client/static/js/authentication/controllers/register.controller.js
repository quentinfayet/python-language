function RegistrationController ($location, $scope, Authentication) {
    var vm = this;

    vm.register = register;

    function register () {
        Authentication.register(vm.email, vm.password, vm.username);
    }
}

angular.module('language.authentication.controllers', ['language.authentication.services'])
.controller('RegistrationController', ['$location', '$scope', 'Authentication', RegistrationController]);
