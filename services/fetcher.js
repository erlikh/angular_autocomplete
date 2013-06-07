angular.module('Autocomplete').service('JetRadarPlacesFetcher', ['$http', function($http){
  return {
    get: function(iata, success_callback){
      $http.get('http://www.jetradar.com/autocomplete/places?q=' + iata)
        .success(success_callback);
    }
  }
}]);
