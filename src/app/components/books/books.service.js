(function() {
  'use strict';

  angular
    .module('books')
    .service('booksService', booksService)
    .directive('myBook', function() {
      return {
        restrict: 'E',
        scope: {
          book: '=info'
        },
        templateUrl: 'app/book/my-book-iso.html'
      };
    });

  /** @ngInject */
  function booksService($rootScope) {

    //console.log($rootScope.myBooks);

    var data = $rootScope.myBooks;

    /*jshint validthis: true */

    this.getBooks = getBooks;

    function getBooks(category, genre) {
      //console.log('category: '+category);
      //console.log('genre: '+genre);
      var temp = [];
      for (var w = 0; w < data.length; w++) {
        //console.log(data[w].genre.category);
        if (category === '' && genre === '') {
          temp.push(data[w]);
        }

        if (category !== '' && genre === '') {
          if (category === data[w].genre.category) {
            temp.push(data[w]);
          }
        }

        if (category === '' && genre !== '') {
          if (genre === data[w].genre.name) {
            temp.push(data[w]);
          }
        }

        if (category !== '' && genre !== '') {
          if (category === data[w].genre.category && genre === data[w].genre.name) {
            temp.push(data[w]);
          }
        }
      }
      return temp;
    }


    this.getCategories = getCategories;

    function getCategories() {
      var temp = [];
      var result = [];
      for (var i = 0; i < data.length; i++) {
        //console.log(data[i].genre.category);
        if (temp.indexOf(data[i].genre.category) === -1) {
          temp.push(data[i].genre.category);
        }

      }
      temp.sort();
      //console.log(temp);

      for (var j = 0; j < temp.length; j++) {
        result.push({
          name: temp[j]
        });
      }

      //return [ { name: '222' }, { name: '333' }];
      return result;
    }

    this.getGenres = getGenres;

    function getGenres() {
      var temp = [];
      var result = [];
      for (var K = 0; K < data.length; K++) {
        //console.log(data[K].genre.category);
        if (temp.indexOf(data[K].genre.name) === -1) {
          temp.push(data[K].genre.name);
        }

      }
      temp.sort();
      //console.log(temp);

      for (var i = 0; i < temp.length; i++) {
        result.push({
          name: temp[i]
        });
      }

      //return [ { name: '222' }, { name: '333' }];
      return result;
    }

  }

})();
