angular.module('pascalprecht.github-adapter')

.factory('$githubUser', ['$q', '$rootScope', function ($q, $rootScope) {

  return function (user) {

    var userPromiseAdapter = {

      notifications: function() {
        var deferred = $q.defer();

        user.notifications(function(err, data) {
          $rootScope.$apply(function() {
            if (err) {
              deferred.reject(err);
            } else {
              deferred.resolve(data);
            }
          });
        });
        return deferred.promise;
      },

      gists: function () {
        var deferred = $q.defer();

        user.gists(function (err, data) {
          $rootScope.$apply(function () {
            if (err) {
              deferred.reject(err);
            } else {
              deferred.resolve(data);
            }
          });
        });
        return deferred.promise;
      },

      orgRepos: function (name) {
        var deferred = $q.defer();

        user.orgRepos(name, function (err, data) {
          $rootScope.$apply(function () {
            if (err) {
              deferred.reject(err);
            } else {
              deferred.resolve(data);
            }
          });
        });
        return deferred.promise;
      },

      orgs: function () {
        var deferred = $q.defer();

        user.orgs(function (err, data) {
          $rootScope.$apply(function () {
            if (err) {
              deferred.reject(err);
            } else {
              deferred.resolve(data);
            }
          });
        });
        return deferred.promise;
      },

      repos: function () {
        var deferred = $q.defer();

        user.repos(function (err, data) {
          $rootScope.$apply(function () {
            if (err) {
              deferred.reject(err);
            } else {
              deferred.resolve(data);
            }
          });
        });
        return deferred.promise;
      },

      show: function (username) {
        var deferred = $q.defer();

        user.show(username, function (err, data) {
          $rootScope.$apply(function () {
            if (err) {
              deferred.reject(err);
            } else {
              deferred.resolve(data);
            }
          });
        });
        return deferred.promise;
      },

      userGists: function (username) {
        var deferred = $q.defer();

        user.userGists(username, function (err, data) {
          $rootScope.$apply(function () {
            if (err) {
              deferred.reject(err);
            } else {
              deferred.resolve(data);
            }
          });
        });
        return deferred.promise;
      },

      userRepos: function (username) {
        var deferred = $q.defer();

        user.userRepos(username, function (err, data) {
          $rootScope.$apply(function () {
            if (err) {
              deferred.reject(err);
            } else {
              deferred.resolve(data);
            }
          });
        });
        return deferred.promise;
      }
    };

    return userPromiseAdapter;
  };
}]);
