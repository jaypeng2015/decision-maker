const qs = require('qs');

module.exports.handler = (event, context, callback) => {
  /** Immediate response for WarmUP plugin */
  if (event.source === 'serverless-plugin-warmup') {
    console.log('WarmUP - Lambda is warm!');
    return callback(null, 'Lambda is warm!');
  }

  const body = qs.parse(event.body);
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
      text: `@${body.user_name} just rolled: ${result}`,
    }),
  };

  callback(null, response);
};
