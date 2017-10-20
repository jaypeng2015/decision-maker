const request = require('request');

module.exports.handler = (event, context, callback) => {
  const { identity, text, responseUrl } = event;
  request({
    url: responseUrl,
    method: 'POST',
    json: true,
    body: {
      response_type: 'in_channel',
      text: `${identity} just rolled: ${text}`,
    },
  }, callback);
};
