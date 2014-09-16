describe('pascalprecht.github-adapter', function () {

  var $githubRepository;

  beforeEach(module('pascalprecht.github-adapter'));

  beforeEach(inject(function (_$githubRepository_) {
    $githubRepository = _$githubRepository_;
  }));

  describe('$githubRepository', function () {

    it('should be defined', function () {
      expect($githubRepository).toBeDefined();
    });

    it('should be a function', function () {
      expect(typeof $githubRepository).toBe('function');
    });

    it('should return an object', function () {
      expect(typeof $githubRepository()).toBe('object');
    });

    it('should return repository object', function () {

      var repo = $githubRepository();

      expect(repo.branch).toBeDefined();
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
});
