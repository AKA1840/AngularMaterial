angular.module('amApp', [
	'ui.router',
	'ngAnimate',
	'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'ngMaterial'
	])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'loginCtrl',
        data: {
          requireLogin: false
        }
      })
	.state('root', {
        url: '/root',
        templateUrl: 'views/root.html',
        controller: 'rootCtrl',
        data: {
          requireLogin: false
        }
      });
  });