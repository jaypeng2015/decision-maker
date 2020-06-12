import _ from 'lodash';

import { handler } from '../parse-request';
import mockContext from './mock-context';

describe('parse request', () => {
  const event = {
    body:
      'token=iBfpqOzx7EVBFovOfpmDlp4t&team_id=T0BHNMKGT&team_domain=inlight-media&channel_id=D1KRE8EAY&channel_name=directmessage&user_id=U0EUT7XDH&user_name=jaypeng&command=%2Froll&text=&response_url=https%3A%2F%2Fhooks.slack.com%2Fcommands%2FT0BHNMKGT%2F500366777506%2Fabcde',
    headers: {
      Accept: 'application/json,*/*',
      'Accept-Encoding': 'gzip,deflate',
      'CloudFront-Forwarded-Proto': 'https',
      'CloudFront-Is-Desktop-Viewer': 'true',
      'CloudFront-Is-Mobile-Viewer': 'false',
      'CloudFront-Is-SmartTV-Viewer': 'false',
      'CloudFront-Is-Tablet-Viewer': 'false',
      'CloudFront-Viewer-Country': 'US',
      'Content-Type': 'application/x-www-form-urlencoded',
      Host: 'c4et1uo7bj.execute-api.ap-southeast-2.amazonaws.com',
      'User-Agent': 'Slackbot 1.0 (+https://api.slack.com/robots)',
      Via: '1.1 649b4de6ebe50fb3c542f3d95c8ed8bb.cloudfront.net (CloudFront)',
      'X-Amz-Cf-Id': '_dp9i6E3VWPEJUamVky6w36F4pzAD3nze9DW25_goOMqzo2vZdiyHw==',
      'X-Amzn-Trace-Id': 'Root=1-5c0ee7a1-a04263245b3eec74ef91fd5e',
      'X-Forwarded-For': '34.229.231.0, 70.132.60.151',
      'X-Forwarded-Port': '443',
      'X-Forwarded-Proto': 'https',
    },
    httpMethod: 'POST',
    isBase64Encoded: false,
    multiValueHeaders: {
      Accept: ['application/json,*/*'],
      'Accept-Encoding': ['gzip,deflate'],
      'CloudFront-Forwarded-Proto': ['https'],
      'CloudFront-Is-Desktop-Viewer': ['true'],
      'CloudFront-Is-Mobile-Viewer': ['false'],
      'CloudFront-Is-SmartTV-Viewer': ['false'],
      'CloudFront-Is-Tablet-Viewer': ['false'],
      'CloudFront-Viewer-Country': ['US'],
      'Content-Type': ['application/x-www-form-urlencoded'],
      Host: ['c4et1uo7bj.execute-api.ap-southeast-2.amazonaws.com'],
      'User-Agent': ['Slackbot 1.0 (+https://api.slack.com/robots)'],
      Via: ['1.1 649b4de6ebe50fb3c542f3d95c8ed8bb.cloudfront.net (CloudFront)'],
      'X-Amz-Cf-Id': ['_dp9i6E3VWPEJUamVky6w36F4pzAD3nze9DW25_goOMqzo2vZdiyHw=='],
      'X-Amzn-Trace-Id': ['Root=1-5c0ee7a1-a04263245b3eec74ef91fd5e'],
      'X-Forwarded-For': ['34.229.231.0, 70.132.60.151'],
      'X-Forwarded-Port': ['443'],
      'X-Forwarded-Proto': ['https'],
    },
    multiValueQueryStringParameters: null,
    path: '/roll',
    pathParameters: null,
    queryStringParameters: null,
    requestContext: {
      accountId: '699948603814',
      apiId: 'c4et1uo7bj',
      domainName: 'c4et1uo7bj.execute-api.ap-southeast-2.amazonaws.com',
      domainPrefix: 'c4et1uo7bj',
      extendedRequestId: 'RtkhOGmgywMF0PQ=',
      httpMethod: 'POST',
      identity: {
        accessKey: null,
        accountId: null,
        caller: null,
        cognitoAuthenticationProvider: null,
        cognitoAuthenticationType: null,
        cognitoIdentityId: null,
        cognitoIdentityPoolId: null,
        sourceIp: '34.229.231.0',
        user: null,
        userAgent: 'Slackbot 1.0 (+https://api.slack.com/robots)',
        userArn: null,
      },
      path: '/dev/roll',
      protocol: 'HTTP/1.1',
      requestId: '5e8ecc8f-fcca-11e8-ae18-8df615f58718',
      requestTime: '10/Dec/2018:22:24:33 +0000',
      requestTimeEpoch: 1544480673481,
      resourceId: '4cnccs',
      resourcePath: '/roll',
      stage: 'dev',
    },
    resource: '/roll',
    stageVariables: null,
  };

  it('role a dice', (done) => {
    handler(event, mockContext, (err, state) => {
      expect(state).toMatchObject({
        identity: '<@U0EUT7XDH>',
        number: 0,
        responseUrl: 'https://hooks.slack.com/commands/T0BHNMKGT/500366777506/abcde',
        type: 1,
      });
      done();
    });
  });

  it('roll a coin', (done) => {
    const coinEvent = _.cloneDeep(event);
    coinEvent.body =
      'token=iBfpqOzx7EVBFovOfpmDlp4t&team_id=T0BHNMKGT&team_domain=inlight-media&channel_id=D1KRE8EAY&channel_name=directmessage&user_id=U0EUT7XDH&user_name=jaypeng&command=%2Froll&text=coin&response_url=https%3A%2F%2Fhooks.slack.com%2Fcommands%2FT0BHNMKGT%2F500366777506%2Fabcde';
    handler(coinEvent, mockContext, (err, state) => {
      expect(state).toMatchObject({
        identity: '<@U0EUT7XDH>',
        number: 0,
        responseUrl: 'https://hooks.slack.com/commands/T0BHNMKGT/500366777506/abcde',
        type: 2,
      });
      done();
    });
  });

  it('roll a number', (done) => {
    const numberEvent = _.cloneDeep(event);
    numberEvent.body =
      'token=iBfpqOzx7EVBFovOfpmDlp4t&team_id=T0BHNMKGT&team_domain=inlight-media&channel_id=D1KRE8EAY&channel_name=directmessage&user_id=U0EUT7XDH&user_name=jaypeng&command=%2Froll&text=100&response_url=https%3A%2F%2Fhooks.slack.com%2Fcommands%2FT0BHNMKGT%2F500366777506%2Fabcde';
    handler(numberEvent, mockContext, (err, state) => {
      expect(state).toMatchObject({
        identity: '<@U0EUT7XDH>',
        number: 100,
        responseUrl: 'https://hooks.slack.com/commands/T0BHNMKGT/500366777506/abcde',
        type: 3,
      });
      done();
    });
  });
});
