require('../services/authentication.service');

angular.module('Language.Authentication.controllers', ['Language.Authentication.services', 'ui-notification']);

require('./login.controller');
require('./registration.controller');