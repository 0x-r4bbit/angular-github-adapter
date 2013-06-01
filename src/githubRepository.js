angular.module('pascalprecht.github-adapter')

.factory('$githubRepository', ['$q', function ($q) {

  return function (repo) {
    var repositoryPromiseAdapter = {
      commit: function () {
        return $q.when(repo.commit());
      },
      contents: function () {
        return $q.when(repo.contents());
      },
      createPullRequest: function () {
        return $q.when(repo.createPullRequest());
      },
      createRef: function () {
        return $q.when(repo.createRef());
      },
      deleteRef: function () {
        return $q.when(repo.deleteRef());
      },
      fork: function () {
        return $q.when(repo.fork());
      },
      getBlob: function () {
        return $q.when(repo.geBlob());
      },
      getRef: function () {
        return $q.when(repo.getRef());
      },
      getSha: function () {
        return $q.when(repo.getSha());
      },
      getTree: function () {
        return $q.when(repo.getTree());
      },
      listBranches: function () {
        return $q.when(repo.listBranches());
      },
      move: function () {
        return $q.when(repo.move());
      },
      postBlob: function () {
        return $q.when(repo.postBlob());
      },
      postTree: function () {
        return $q.when(repo.postTree());
      },
      read: function () {
        return $q.when(repo.read());
      },
      remove: function () {
        return $q.when(repo.remove());
      },
      show: function () {
        return $q.when(repo.show());
      },
      updateHead: function () {
        return $q.when(repo.updateHead());
      },
      updateTree: function () {
        return $q.when(repo.updateTree());
      },
      write: function () {
        return $q.when(repo.write());
      }
    };

    return repositoryPromiseAdapter;
  };
}]);
