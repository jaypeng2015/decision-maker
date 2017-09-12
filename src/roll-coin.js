module.exports.handler = (event, context, callback) => {
  const { identity } = event;
  const text = `:coin_${Math.floor((Math.random() * 2) + 1)}:`;
  callback(null, { text, identity });
};
