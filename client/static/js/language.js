require('./authentication/authentication');

function config($mdThemingProvider, $routeProvider) {
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
            controller: 'RegistrationController'
        });
}

angular.module('Language', ['Language.Authentication', 'ngRoute'])
    .config(config);