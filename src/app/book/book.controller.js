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
    vm.similarBooks = [];
    vm.creationDate = 1450816156304;
	vm.id = $stateParams.id;

    activate();

    function activate() {
	  getBook(vm.id);
	  getSimilarBooks(vm.oneBook.genre.category, vm.oneBook.genre.name);
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }



    function getBook(id) {
	      
      vm.books = booksService.getBooks('', '');

      angular.forEach(vm.books, function(theBook) {
        if (theBook.id === id) {
	        vm.oneBook = theBook;
        }
      });
    }
    
    function getSimilarBooks(category, genre) {
	    var temp = booksService.getBooks(category, genre);
	    var tempBook=[];
	    angular.forEach(temp, function(book) {
        	book.moment = moment(book.published).fromNow();
        	if (book.id !== vm.id && tempBook.length<3) {
        		tempBook.push(book);
        	}
      	});
      	
      	vm.similarBooks=tempBook;
    }
   
    
  }
})();
