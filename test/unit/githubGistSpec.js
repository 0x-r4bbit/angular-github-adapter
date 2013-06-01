describe('pascalprecht.github-adapter', function () {

  var $githubGist;

  beforeEach(module('pascalprecht.github-adapter'));

  beforeEach(inject(function (_$githubGist_) {
    $githubGist = _$githubGist_;
  }));

  describe('$githubGist', function () {

    it('should be defined', function () {
      expect($githubGist).toBeDefined();
    });

    it('should be a function', function () {
      expect(typeof $githubGist).toBe('function');
    });

    it('should return an object', function () {
      expect(typeof $githubGist()).toBe('object');
    });

    it('should return a gist object', function () {

      var gist = $githubGist();

      expect(gist.delete).toBeDefined();
      expect(gist.fork).toBeDefined();
      expect(gist.read).toBeDefined();
      expect(gist.update).toBeDefined();
    });
  });
});
