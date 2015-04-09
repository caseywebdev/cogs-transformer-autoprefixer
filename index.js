var autoprefixer = require('autoprefixer-core');

module.exports = function (file, options, cb) {
  var source = file.buffer.toString();
  try { source = autoprefixer.process(source, options).css; }
  catch (er) { return cb(er); }
  cb(null, {buffer: new Buffer(source)});
};
