module.exports.handler = (event, context, callback) => {
  const { identity, responseUrl, number } = event;
  const text = `${Math.floor(Math.random() * number + 1)}`;
  callback(null, { text, identity, responseUrl });
};
