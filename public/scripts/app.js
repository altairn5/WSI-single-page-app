'use strict';


(function(){

  angular
  .module('WSMarkup',[])
  .controller('singlePageCtrl', Controller)
  .factory('lodash', lodashFactory)


  Controller.$inject = [
    '$scope',
    '$http',
    'lodash',
    '$window'
  ]

  /*************
  * CONTROLLER *
  *************/

  function Controller( $scope, $http, _, $window){

    var vm = this;
    var reqPath = 'http://localhost:3000';

    vm.loading = true;
    vm.product = {
      name: null,
      price: null,
      description: null,
      imgLg: null,
      imgSm: null,
      quantity: 0
    }

    vm.products = [];

    var fetchAll = function(){

      $http.get(`${reqPath}/products`)
      .then(function(res){

        parseProducts(res.data);
      })
      .catch(function(err){

        return console.log("the error: ", err)
      });
    };


    var parseProducts = function(products){

      let buffers = {}
      let items  = []

      _.forEach(products, function(p){

        buffers = _.pick(p, ['images']);

        bufferToBase64(buffers.images.sm.data.data, function smallImages(img){
          p.imgSm = img;
        })

        bufferToBase64(buffers.images.lg.data.data, function largeImages(img){
          p.imgLg = img;
        })

        p.quantity = 0;
        items.push(_.omit(p, ['images']));
      })

      if(items.length > 0){

        vm.products = _.cloneDeep( items );
        vm.product  =  vm.products[0];
        vm.loading = false;
      }

    }

    var bufferToBase64 = function(buffer, cb){
      let binary = '';
      let bytes = new Uint8Array( buffer );
      let byteLength = bytes.byteLength;

      for (let i = 0; i < byteLength; i++) {

        binary += String.fromCharCode( bytes[ i ] );
      }

      return cb( $window.btoa( binary ) );
    }


    vm.getProduct = function( index ){

      vm.product = vm.products[index];
    }


    vm.onload = function(){
      fetchAll();
    }
    // Controller
  };

  /**********
  *  FACTORY  *
  ***********/

  lodashFactory.$inject = [
    '$window'
  ]

  function lodashFactory($window){
    if(!$window._){
      console.log("no lodash here");
    }
    return $window._;

    // Factory
  }



})();
