(function() {
  'use strict';

  angular
    .module('books')
    .controller('IntroController', IntroController);

  /** @ngInject */
  function IntroController($scope, $location) {
    var vm = this;

    vm.images=[
      { src: '/assets/images/harry.jpg', alt: 'Harry'},
      { src: '/assets/images/emmanuel.jpg', alt: 'Emmanuel'}
    ];

    var random = Math.floor(Math.random() * 2) ;

    vm.image = vm.images[random];

    $scope.goHome = function() {
      $location.path('books');
    };

  }
})();
