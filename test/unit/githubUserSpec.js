describe('pascalprecht.github-adapter', function () {

  var $githubUser;

  beforeEach(module('pascalprecht.github-adapter'));

  beforeEach(inject(function (_$githubUser_) {
    $githubUser = _$githubUser_;
  }));

  describe('$githubUser', function () {

    it('should be defined', function () {
      expect($githubUser).toBeDefined();
    });

    it('should be a function', function () {
      expect(typeof $githubUser).toBe('function');
    });

    it('should return an object', function () {
      expect(typeof $githubUser()).toBe('object');
    });

    it('should return a user object', function () {

      var user = $githubUser();

      expect(user.gists).toBeDefined();
      expect(user.orgRepos).toBeDefined();
      expect(user.orgs).toBeDefined();
      expect(user.repos).toBeDefined();
      expect(user.show).toBeDefined();
      expect(user.userGists).toBeDefined();
      expect(user.userRepos).toBeDefined();
    });
  });
});
