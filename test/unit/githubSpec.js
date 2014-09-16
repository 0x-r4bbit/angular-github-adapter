/*jslint es5: true */
describe('pascalprecht.github-adapter', function () {

  var $github, $timeout, $httpBackend, $q, $rootScope;

  beforeEach(module('pascalprecht.github-adapter', function ($githubProvider) {
    $githubProvider.username('PascalPrecht');
    $githubProvider.password('foo');
    $githubProvider.authType('basic');
  }));

  beforeEach(inject(function (_$github_, _$httpBackend_, _$timeout_, _$q_, _$rootScope_) {
    $github = _$github_;
    $httpBackend = _$httpBackend_;
    $timeout = _$timeout_;
    $q = _$q_;
    $rootScope = _$rootScope_;
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('$github', function () {

    it('should be defined', function () {
      expect($github).toBeDefined();
    });

    it('should be an object', function () {
      expect(typeof $github).toBe('object');
    });

    it('should have a method setCreds()', function() {
      expect($github.setCreds).toBeDefined();
    });

    it('should have a method getRepo()', function () {
      expect($github.getRepo).toBeDefined();
    });

    it('should have a method getUser()', function () {
      expect($github.getUser).toBeDefined();
    });

    it('should have a method getGist()', function () {
      expect($github.getGist).toBeDefined();
    });

    describe('#setCreds', function () {
      it('should be a function', function () {
        expect(typeof $github.setCreds).toBe('function');
      });

      it('should return undefined', function () {
        expect(typeof $github.setCreds()).toBe('undefined');
      });
    });

    describe('#getRepo', function () {

      it('should be a function', function () {
        expect(typeof $github.getRepo).toBe('function');
      });

      it('should return an object', function () {
        expect(typeof $github.getRepo()).toBe('object');
      });

      it('should return a repository object', function () {

        var repo,
            deferred = $q.defer(),
            promise = deferred.promise;

        promise.then(function (value) {
          repo = value;
        });

        $github.getRepo().then(function (repo) {
          deferred.resolve(repo);
        });

        $rootScope.$apply();

        expect(repo.commit).toBeDefined();
        expect(repo.contents).toBeDefined();
        expect(repo.createPullRequest).toBeDefined();
        expect(repo.createRef).toBeDefined();
        expect(repo.deleteRef).toBeDefined();
        expect(repo.fork).toBeDefined();
        expect(repo.getBlob).toBeDefined();
        expect(repo.getRef).toBeDefined();
        expect(repo.getSha).toBeDefined();
        expect(repo.getTree).toBeDefined();
        expect(repo.listBranches).toBeDefined();
        expect(repo.move).toBeDefined();
        expect(repo.postBlob).toBeDefined();
        expect(repo.postTree).toBeDefined();
        expect(repo.read).toBeDefined();
        expect(repo.remove).toBeDefined();
        expect(repo.show).toBeDefined();
        expect(repo.updateHead).toBeDefined();
        expect(repo.updateTree).toBeDefined();
        expect(repo.write).toBeDefined();
        expect(repo.getPull).toBeDefined();
      });
    });

    describe('#getUser', function () {

      it('should be a function', function () {
        expect(typeof $github.getUser).toBe('function');
      });

      it('should return an object', function () {
        expect(typeof $github.getUser()).toBe('object');
      });

      it('should return a user object', function () {

        var user,
            deferred = $q.defer(),
            promise = deferred.promise;

        promise.then(function (value) {
          user = value;
        });

        $github.getUser().then(function (user) {
          deferred.resolve(user);
        });

        $rootScope.$apply();

        expect(user.gists).toBeDefined();
        expect(user.orgRepos).toBeDefined();
        expect(user.orgs).toBeDefined();
        expect(user.repos).toBeDefined();
        expect(user.show).toBeDefined();
        expect(user.userGists).toBeDefined();
        expect(user.userRepos).toBeDefined();
      });
    });

    describe('#getGist', function () {

      it('should be a function', function () {
        expect(typeof $github.getGist).toBe('function');
      });

      it('should return an object', function () {
        expect(typeof $github.getGist()).toBe('object');
      });

      it('should return a gist object', function () {

        var gist,
            deferred = $q.defer(),
            promise = deferred.promise;

        promise.then(function (value) {
          gist = value;
        });

        $github.getGist().then(function (gist) {
          deferred.resolve(gist);
        });

        $rootScope.$apply();

        expect(gist.delete).toBeDefined();
        expect(gist.fork).toBeDefined();
        expect(gist.read).toBeDefined();
        expect(gist.update).toBeDefined();
      });
    });
  });
});
