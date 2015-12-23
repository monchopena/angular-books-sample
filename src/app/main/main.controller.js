(function() {
  'use strict';

  angular
    .module('books')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, booksService) {
    var vm = this;

    vm.books = [];
    vm.classAnimation = '';
    vm.creationDate = 1450816156304;
    
    vm.currentPage = 1;
    vm.pageSize = 6;
    
    vm.categories = [];
    vm.genres = [];

    activate();

    function activate() {
	  getCategories();
	  getGenres();
      getBooks();
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

    function getBooks() {  
      vm.books = booksService.getBooks();

      angular.forEach(vm.books, function(book) {
        book.rank = Math.random();
      });
    }
  }
})();
