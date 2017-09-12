module.exports.handler = (event, context, callback) => {
  const { identity } = event;
  const text = `:dice_${Math.floor((Math.random() * 6) + 1)}:`;
  callback(null, { text, identity });
};
