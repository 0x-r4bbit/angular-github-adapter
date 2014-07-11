angular.module('pascalprecht.github-adapter', ['ng']);

angular.module('pascalprecht.github-adapter').provider('$github', function () {

  var $username,
      $password,
      $authType,
      $token;

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
  this.token = function (token) {
    if (!token) {
      return $token;
    }
    $token = token;
  };

  this.$get = ['$q', '$githubRepository', '$githubUser', '$githubGist', function ($q, $githubRepository, $githubUser, $githubGist) {

    var config = {};
    if ($username && $password) {
      config = {
        username: $username,
        password: $password,
        auth: $authType || 'basic'
      }
    }
    if ($token) {
      config.token = $token;
    }
    var github = new Github(config);

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
