const qs = require('qs');

module.exports.handler = (event, context, callback) => {
  const body = qs.parse(event.body);
  const identity = body.user_name ? `@${body.user_name}` : 'You';
  const result = body.text === 'coin'
    ? `:coin_${Math.floor((Math.random() * 2) + 1)}:`
    : `:dice_${Math.floor((Math.random() * 6) + 1)}:`;
  const response = {
    statusCode: 200,
    headers: {
      // Required for CORS support to work
      'Access-Control-Allow-Origin': '*',

      // Required for cookies, authorization headers with HTTPS
      'Access-Control-Allow-Credentials': true,
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      response_type: 'in_channel',
      text: `${identity} just rolled: ${result}`,
    }),
  };

  callback(null, response);
};
