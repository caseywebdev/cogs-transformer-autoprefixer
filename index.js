const autoprefixer = require('autoprefixer');

module.exports = ({file: {buffer}, options}) => {
  try {
    return {
      buffer: Buffer.from(autoprefixer.process(buffer.toString(), options).css)
    };
  } catch (er) {
    throw er instanceof Error ? er : new Error(er.toString());
  }
};
