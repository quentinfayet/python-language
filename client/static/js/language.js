require('./authentication/authentication');

function config($mdThemingProvider, $routeProvider, $locationProvider, NotificationProvider) {
    var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50'],
        '50': 'ffffff'
    });
    $mdThemingProvider.definePalette('customBlue', customBlueMap);
    $mdThemingProvider.theme('default')
        .primaryPalette('customBlue', {
            'default': '500',
            'hue-1': '50'
        })
        .accentPalette('pink');
    $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey');

    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'LoginController',
            controllerAs: 'login'
        })
        .when('/register', {
            templateUrl: 'pages/authentication/register.html',
            controller: 'RegistrationController',
            controllerAs: 'registration'
        });

    NotificationProvider.setOptions({
        delay: 10000,
        startTop: 20,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'left',
        positionY: 'bottom'
    });

    $locationProvider.html5Mode(true);
}

angular.module('Language', ['Language.Authentication', 'ngRoute', 'ui-notification'])
    .config(['$mdThemingProvider', '$routeProvider', '$locationProvider', 'NotificationProvider', config]);