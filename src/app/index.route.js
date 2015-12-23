(function() {
  'use strict';

  angular
    .module('books')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('book', {
        url: '/book/:id',
        templateUrl: 'app/book/book.html',
        controller: 'BookController',
        controllerAs: 'book'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/components/about/about.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
