const autoprefixer = require('autoprefixer');

module.exports = (file, options, cb) => {
  let source = file.buffer.toString();
  try {
    source = autoprefixer.process(source, options).css;
  } catch (er) {
    cb(er instanceof Error ? er : new Error(er.toString()));
  }
  cb(null, {buffer: new Buffer(source)});
};
