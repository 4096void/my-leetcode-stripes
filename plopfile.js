module.exports = function (plop) {
  plop.setGenerator('newLeetcodeChallenge', {
    description: 'New a leetcode challenge.',
    prompts: [{
      type: 'input',
      name: 'number',
      message: 'Problem\'s number:'
    }, {
      type: 'input',
      name: 'url',
      message: 'Problem\'s url:',
    }, {
      type: 'input',
      name: 'name',
      message: 'Fucntion\'s name:',
    }],
    actions: [{
      type: 'add',
      path: './{{number}}.js',
    }, {
      type: 'add',
      path: './test/{{number}}.js',
      templateFile: './test/test-template.txt',
    }],
  });
};
