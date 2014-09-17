angular.module('pascalprecht.github-adapter', ['ng']);
angular.module('pascalprecht.github-adapter').provider('$github', function () {
  var $username, $password, $authType, $token;
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
  this.$get = [
    '$q',
    '$githubRepository',
    '$githubIssues',
    '$githubUser',
    '$githubGist',
    function ($q, $githubRepository, $githubIssues, $githubUser, $githubGist) {
      var config = {};
      if ($username && $password) {
        config = {
          username: $username,
          password: $password,
          auth: $authType || 'basic'
        };
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
      $github.getIssues = function (username, reponame) {
        return $q.when($githubIssues(github.getIssues(username, reponame)));
      };
      $github.getUser = function () {
        return $q.when($githubUser(github.getUser()));
      };
      $github.getGist = function (id) {
        return $q.when($githubGist(github.getGist(id)));
      };
      return $github;
    }
  ];
});
/*jslint es5: true */
angular.module('pascalprecht.github-adapter').factory('$githubGist', [
  '$q',
  function ($q) {
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
  }
]);
angular.module('pascalprecht.github-adapter').factory('$githubIssues', [
  '$q',
  function ($q) {
    return function (issues) {
      var issuesPromiseAdapter = {
          list: function (options) {
            var deferred = $q.defer();
            issues.list(options, function (err, res) {
              if (err) {
                deferred.reject(err);
              } else {
                deferred.resolve(res);
              }
            });
            return deferred.promise;
          }
        };
      return issuesPromiseAdapter;
    };
  }
]);
angular.module('pascalprecht.github-adapter').factory('$githubRepository', [
  '$q',
  function ($q) {
    return function (repo) {
      var repositoryPromiseAdapter = {
          branch: function (oldBranch, newBranch) {
            var deferred = $q.defer();
            var args = [].push.call(arguments, function (err) {
                if (err) {
                  deferred.reject(err);
                } else {
                  deferred.resolve();
                }
              });
            repo.branch.apply(this, args);
            return deferred.promise;
          },
          commit: function (parent, tree, message) {
            var deferred = $q.defer();
            repo.commit(parent, tree, message, function (err, sha) {
              if (err) {
                deferred.reject(err);
              } else {
                deferred.resolve(sha);
              }
            });
            return deferred.promise;
          },
          contents: function (branch, path) {
            var deferred = $q.defer();
            repo.contents(branch, path, function (err, contents) {
              if (err) {
                deferred.reject(err);
              } else {
                deferred.resolve(contents);
              }
            });
            return deferred.promise;
          },
          createPullRequest: function (pr) {
            var deferred = $q.defer();
            repo.createPullRequest(pr, function (err, pr) {
              if (err) {
                deferred.reject(err);
              } else {
                deferred.resolve(pr);
              }
            });
            return deferred.promise;
          },
          createRef: function (spec) {
            var deferred = $q.defer();
            repo.createRef(spec, function (err) {
              if (err) {
                deferred.reject(err);
              } else {
                deferred.resolve();
              }
            });
            return deferred.promise;
          },
          deleteRef: function (ref) {
            var deferred = $q.defer();
            repo.deleteRef(ref, function (err) {
              if (err) {
                deferred.reject(err);
              } else {
                deferred.resolve();
              }
            });
            return deferred.promise;
          },
          fork: function () {
            var deferred = $q.defer();
            repo.fork(function () {
              deferred.resolve();
            });
            return deferred.promise;
          },
          getBlob: function (sha) {
            var deferred = $q.defer();
            repo.getBlob(sha, function (err) {
              if (err) {
                deferred.reject(err);
              } else {
                deferred.resolve();
              }
            });
            return deferred.promise;
          },
          getCommits: function (options) {
            var deferred = $q.defer();
            repo.getCommits(options, function (err, repo) {
              if (err) {
                deferred.reject(err);
              } else {
                deferred.resolve(repo);
              }
            });
            return deferred.promise;
          },
          getRef: function (ref) {
            var deferred = $q.defer();
            repo.getRef(ref, function (err, res) {
              if (err) {
                deferred.reject(err);
              } else {
                deferred.resolve(res);
              }
            });
            return deferred.promise;
          },
          getSha: function (branch, path) {
            var deferred = $q.defer();
            repo.getSha(branch, path, function (err, sha) {
              if (err) {
                deferred.reject(err);
              } else {
                deferred.resolve(sha);
              }
            });
            return deferred.promise;
          },
          getTree: function (tree) {
            var deferred = $q.defer();
            repo.getTree(tree, function (err, tree) {
              if (err) {
                deferred.reject(err);
              } else {
                deferred.resolve(tree);
              }
            });
            return deferred.promise;
          },
          listBranches: function () {
            var deferred = $q.defer();
            repo.listBranches(function (err, branches) {
              if (err) {
                deferred.reject(err);
              } else {
                deferred.resolve(branches);
              }
            });
            return deferred.promise;
          },
          move: function (branch, path, newPath) {
            var deferred = $q.defer();
            repo.move(branch, path, newPath, function (err) {
              if (err) {
                deferred.reject(err);
              } else {
                deferred.resolve();
              }
            });
            return deferred.promise;
          },
          postBlob: function (content) {
            var deferred = $q.defer();
            repo.postBlob(content, function (err, sha) {
              if (err) {
                deferred.reject(err);
              } else {
                deferred.resolve(sha);
              }
            });
            return deferred.promise;
          },
          postTree: function () {
            var deferred = $q.defer();
            repo.postTree(tree, function (err, sha) {
              if (err) {
                deferred.reject(err);
              } else {
                deferred.resolve(sha);
              }
            });
            return deferred.promise;
          },
          read: function (branch, path) {
            var deferred = $q.defer();
            repo.read(branch, path, function (err, content) {
              if (err) {
                deferred.reject(err);
              } else {
                deferred.resolve(content);
              }
            });
            return deferred.promise;
          },
          remove: function (branch, path) {
            var deferred = $q.defer();
            repo.remove(branch, path, function (err) {
              if (err) {
                deferred.reject(err);
              } else {
                deferred.resolve();
              }
            });
            return deferred.promise;
          },
          show: function () {
            var deferred = $q.defer();
            repo.show(function (err, repo) {
              if (err) {
                deferred.reject(err);
              } else {
                deferred.resolve(repo);
              }
            });
            return deferred.promise;
          },
          updateHead: function (head, commit) {
            var deferred = $q.defer();
            repo.updateHead(head, commit, function (err) {
              if (err) {
                deferred.reject(err);
              } else {
                deferred.resolve();
              }
            });
            return deferred.promise;
          },
          updateTree: function (baseTree, path, blob) {
            var deferred = $q.defer();
            repo.updateTree(baseTree, path, blob, function (err, sha) {
              if (err) {
                deferred.reject(err);
              } else {
                deferred.resolve(sha);
              }
            });
            return deferred.promise;
          },
          write: function (branch, path, content, message) {
            var deferred = $q.defer();
            repo.write(branch, path, content, message, function (err) {
              if (err) {
                deferred.reject(err);
              } else {
                deferred.resolve();
              }
            });
            return deferred.promise;
          },
          listPulls: function (state) {
            var deferred = $q.defer();
            repo.listPulls(state, function (err, pulls) {
              if (err) {
                deferred.reject(err);
              } else {
                deferred.resolve(pulls);
              }
            });
          },
          getPull: function (number) {
            var deferred = $q.defer();
            repo.getPull(number, function (err, pull) {
              if (err) {
                deferred.reject(err);
              } else {
                deferred.resolve(pull);
              }
            });
            return deferred.promise;
          }
        };
      return repositoryPromiseAdapter;
    };
  }
]);
angular.module('pascalprecht.github-adapter').factory('$githubUser', [
  '$q',
  '$rootScope',
  function ($q, $rootScope) {
    return function (user) {
      var userPromiseAdapter = {
          notifications: function () {
            var deferred = $q.defer();
            user.notifications(function (err, data) {
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
  }
]);