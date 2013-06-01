angular.module('pascalprecht.github-adapter')

.factory('$githubGist', ['$q', function ($q) {

  return function (gist) {

    var gistPromiseAdapter = {

      delete: function () {
        return $q.when(gist.delete());
      },
      fork: function () {
        return $q.when(gist.fork());
      },
      read: function () {
        return $q.when(gist.read());
      },
      update: function () {
        return $q.when(gist.update());
      }
    };

    return gistPromiseAdapter;
  };
}]);
