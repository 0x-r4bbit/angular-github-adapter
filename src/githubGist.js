angular.module('pascalprecht.github-adapter')

.factory('$githubGist', ['$q', function ($q) {

  return function (gist) {

    var gistPromiseAdapter = {

      create: function (options) {
        var deferred = $q.defer();

        gist.create(options, function (err, res) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(res);
          }
        });
        return deferred.promise;
      },

      delete: function () {
        var deferred = $q.defer();

        gist.delete(function (err, res) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(res);
          }
        });
        return deferred.promise;
      },

      fork: function () {
        var deferred = $q.defer();

        gist.fork(function (err, gist) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(gist);
          }
        });
        return deferred.promise;
      },

      read: function () {
        var deferred = $q.defer();

        gist.read(function (err, gist) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(gist);
          }
        });
        return deferred.promise;
      },

      update: function (options) {
        var deferred = $q.defer();

        gist.update(options, function (err, gist) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(gist);
          }
        });
        return deferred.promise;
      }
    };

    return gistPromiseAdapter;
  };
}]);
