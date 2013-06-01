angular.module('pascalprecht.github-adapter')

.factory('$githubUser', ['$q', function ($q) {

  return function (user) {

    var userPromiseAdapter = {

      gists: function () {
        return $q.when(user.gists());
      },
      orgRepos: function () {
        return $q.when(user.orgRepos());
      },
      orgs: function () {
        return $q.when(user.orgs());
      },
      repos: function () {
        return $q.when(user.repos());
      },
      show: function () {
        return $q.when(user.show());
      },
      userGists: function () {
        return $q.when(user.userGists());
      },
      userRepos: function () {
        return $q.when(user.userRepos());
      }
    };
    
    return userPromiseAdapter;
  };
}]);
