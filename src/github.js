angular.module('pascalprecht.github-adapter', ['ng']);

angular.module('pascalprecht.github-adapter').provider('$github', function () {

  var $username,
      $password,
      $authType;

  this.username = function (name) {
    if (!name) {
      return $username;
    }
    $username = name;
  };

  this.password = function (password) {
    if (!password) {
      return $password;
    }
    $password = password;
  };

  this.authType = function (type) {
    if (!type) {
      return $authType;
    }
    $authType = type;
  };

  this.$get = ['$q', '$githubRepository', '$githubUser', '$githubGist', function ($q, $githubRepository, $githubUser, $githubGist) {

    var github = new Github({
      username: $username,
      password: $password,
      auth: $authType
    });

    var $github = {};

    $github.setCreds = function (username, password, authType) {
      github = new Github({
        username: username,
        password: password,
        auth: authType
      });
    };

    $github.getRepo = function (username, reponame) {
      return $q.when($githubRepository(github.getRepo(username, reponame)));
    };

    $github.getUser = function () {
      return $q.when($githubUser(github.getUser()));
    };

    $github.getGist = function (id) {
      return $q.when($githubGist(github.getGist(id)));
    };

    return $github;
  }];
});
