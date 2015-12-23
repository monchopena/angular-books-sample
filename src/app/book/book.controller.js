(function() {
  'use strict';

  angular
    .module('books')
    .controller('BookController', BookController);

  /** @ngInject */
  function BookController($timeout, $stateParams, booksService) {
    var vm = this;

    vm.oneBook = '';
    vm.classAnimation = '';
    vm.creationDate = 1450816156304;
	vm.id = $stateParams.id;

    activate();

    function activate() {
	  getBook(vm.id);
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }



    function getBook(id) {
	      
      vm.books = booksService.getBooks();

      angular.forEach(vm.books, function(theBook) {
        if (theBook.id === id) {
	        vm.oneBook = theBook;
        }
      });
    }
   
    
  }
})();
