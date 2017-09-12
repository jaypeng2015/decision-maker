module.exports.handler = (event, context, callback) => {
  const { identity, text } = event;
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
      text: `${identity} just rolled: ${text}`,
    }),
  };

  callback(null, response);
};
