const qs = require('qs');

module.exports.handler = (event, context, callback) => {
  const body = qs.parse(event.body);
  const identity = body.user_id ? `<@${body.user_id}>` : 'You';
  let type = 1;
  if (body.text) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(body.text.trim())) {
      type = 3;
    } else if (body.text.includes('coin')) {
      type = 2;
    }
  }
  const responseUrl = body.response_url;
  const state = { identity, type, responseUrl, number: parseInt(body.text, 10) };
  callback(null, state);
};
