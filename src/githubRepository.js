angular.module('pascalprecht.github-adapter')

.factory('$githubRepository', ['$q', function ($q) {

  return function (repo) {
    return {

      branch: function(oldBranch, newBranch) {
        var deferred = $q.defer();
        var args = [].push.call(arguments, function(err) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve();
          }
        });

        repo.branch.apply(this, args);
        return deferred.promise;
      },

      commit: function(parent, tree, message) {
        var deferred = $q.defer();

        repo.commit(parent, tree, message, function(err, sha) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(sha);
          }
        });
        return deferred.promise;
      },

      contents: function(branch, path) {
        var deferred = $q.defer();

        repo.contents(branch, path, function(err, contents) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(contents);
          }
        });
        return deferred.promise;
      },

      createPullRequest: function(pr) {
        var deferred = $q.defer();

        repo.createPullRequest(pr, function(err, pr) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(pr);
          }
        });
        return deferred.promise;
      },

      createRef: function(spec) {
        var deferred = $q.defer();

        repo.createRef(spec, function(err) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve();
          }
        });
        return deferred.promise;
      },

      deleteRef: function(ref) {
        var deferred = $q.defer();

        repo.deleteRef(ref, function(err) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve();
          }
        });
        return deferred.promise;
      },

      fork: function() {
        var deferred = $q.defer();

        repo.fork(function() {
          deferred.resolve();
        });
        return deferred.promise;
      },

      getBlob: function(sha) {
        var deferred = $q.defer();

        repo.getBlob(sha, function(err) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve();
          }
        });
        return deferred.promise;
      },

      getCommits: function(options) {
        var deferred = $q.defer();
        repo.getCommits(options, function(err, repo) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(repo);
          }
        });
        return deferred.promise;
      },

      getRef: function(ref) {
        var deferred = $q.defer();

        repo.getRef(ref, function(err, res) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(res);
          }
        });
        return deferred.promise;
      },

      getSha: function(branch, path) {
        var deferred = $q.defer();

        repo.getSha(branch, path, function(err, sha) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(sha);
          }
        });
        return deferred.promise;
      },

      getTree: function(tree) {
        var deferred = $q.defer();

        repo.getTree(tree, function(err, tree) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(tree);
          }
        });
        return deferred.promise;
      },

      listBranches: function() {
        var deferred = $q.defer();

        repo.listBranches(function(err, branches) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(branches);
          }
        });
        return deferred.promise;
      },

      move: function(branch, path, newPath) {
        var deferred = $q.defer();

        repo.move(branch, path, newPath, function(err) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve();
          }
        });
        return deferred.promise;
      },

      postBlob: function(content) {
        var deferred = $q.defer();

        repo.postBlob(content, function(err, sha) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(sha);
          }
        });
        return deferred.promise;
      },

      postTree: function() {
        var deferred = $q.defer();

        repo.postTree(tree, function(err, sha) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(sha);
          }
        });
        return deferred.promise;
      },

      read: function(branch, path) {
        var deferred = $q.defer();

        repo.read(branch, path, function(err, content) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(content);
          }
        });
        return deferred.promise;
      },

      remove: function(branch, path) {
        var deferred = $q.defer();

        repo.remove(branch, path, function(err) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve();
          }
        });
        return deferred.promise;
      },

      show: function() {
        var deferred = $q.defer();

        repo.show(function(err, repo) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(repo);
          }
        });
        return deferred.promise;
      },

      updateHead: function(head, commit) {
        var deferred = $q.defer();

        repo.updateHead(head, commit, function(err) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve();
          }
        });
        return deferred.promise;
      },

      updateTree: function(baseTree, path, blob) {
        var deferred = $q.defer();

        repo.updateTree(baseTree, path, blob, function(err, sha) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(sha);
          }
        });
        return deferred.promise;
      },

      write: function(branch, path, content, message) {
        var deferred = $q.defer();

        repo.write(branch, path, content, message, function(err) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve();
          }
        });
        return deferred.promise;
      },

      listPulls: function(state) {
        var deferred = $q.defer();

        repo.listPulls(state, function(err, pulls) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(pulls);
          }
        });
        return deferred.promise;
      },

      getPull: function(number) {
        var deferred = $q.defer();

        repo.getPull(number, function(err, pull) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(pull);
          }
        });
        return deferred.promise;
      }
    };
  };
}]);
