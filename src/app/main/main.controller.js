(function() {
  'use strict';

  angular
    .module('books')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $scope, booksService) {
    var vm = this;

    vm.books='';
    vm.classAnimation = '';
    vm.creationDate = 1450816156304;

    vm.currentPage = 1;

    //The Page Size
    $scope.pageSize = 4;

    vm.categories = [];
    vm.genres = [];

    $scope.selectCategory = '';
    $scope.selectGenre = '';

    $scope.update = function() {
      //console.log('$scope.selectCategory: ' + $scope.selectCategory);
      //console.log('$scope.selectGenre: ' + $scope.selectGenre);
      getBooks($scope.selectCategory, $scope.selectGenre);
    };

    activate();

    function activate() {
      getCategories();
      getGenres();
      getBooks($scope.selectCategory, $scope.selectGenre);
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }



    function getCategories() {
      vm.categories = booksService.getCategories();
    }

    function getGenres() {
      vm.genres = booksService.getGenres();
    }

    function getBooks(category, genre) {
      vm.books = booksService.getBooks(category, genre);

      angular.forEach(vm.books, function(book) {
        book.moment = moment(book.published).fromNow();
      });

    }
  }
})();
