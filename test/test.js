var helper = require('cogs-test-helper');

helper.run({
  'test/config.json': {
    'test/input.css': {
      path: 'test/input.css',
      buffer: helper.getFileBuffer('test/output.css'),
      hash: helper.getFileHash('test/output.css'),
      requires: [{
        path: 'test/input.css',
        hash: helper.getFileHash('test/input.css')
      }],
      links: [],
      globs: []
    },
    'test/error.css': Error
  }
});
