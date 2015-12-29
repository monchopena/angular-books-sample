(function() {
  'use strict';

  angular
    .module('books')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $http) {

    $http({
      method: 'GET',
      url: '/assets/json/books.json'
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      $rootScope.myBooks = response.data;
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      $rootScope.myBooks = '';
      //TODO
      //Go to 500 page
    });

    $log.debug('Here we go!');

  }
})();
