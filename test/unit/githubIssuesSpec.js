describe('pascalprecht.github-adapter', function () {

  var $githubIssues;

  beforeEach(module('pascalprecht.github-adapter'));

  beforeEach(inject(function (_$githubIssues_) {
    $githubIssues = _$githubIssues_;
  }));

  describe('$githubIssues', function () {

    it('should be defined', function () {
      expect($githubIssues).toBeDefined();
    });

    it('should be a function', function () {
      expect(typeof $githubIssues).toBe('function');
    });

    it('should return an object', function () {
      expect(typeof $githubIssues()).toBe('object');
    });

    it('should return issues object', function () {

      var issues = $githubIssues();

      expect(issues.list).toBeDefined();
    });
  });
});
