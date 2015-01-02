angular.module('pascalprecht.github-adapter')

.factory('$githubIssues', ['$q', function ($q) {

  return function (issues) {
    return {

      list: function(options) {
        var deferred = $q.defer();

        issues.list(options, function(err, res) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(res);
          }
        });
        return deferred.promise;
      }
    };
  };
}]);
