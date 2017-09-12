const qs = require('qs');

module.exports.handler = (event, context, callback) => {
  const body = qs.parse(event.body);
  const identity = body.user_id ? `<@${body.user_id}>` : 'You';
  const type = body.text && body.text.includes('coin') ? 2 : 1;
  const state = { identity, type };
  callback(null, state);
};
