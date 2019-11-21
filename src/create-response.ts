import { Callback, Context } from 'aws-lambda';
import * as awsXRay from 'aws-xray-sdk';
import * as http from 'http';
import * as https from 'https';
awsXRay.captureHTTPsGlobal(http, true);
awsXRay.captureHTTPsGlobal(https, true);

import State from './state';
import * as request from 'request';

export const handler = (event: State, context: Context, callback: Callback) => {
  const { identity, text, responseUrl } = event;
  if (!responseUrl) {
    callback();
    return;
  }

  request(
    {
      body: {
        response_type: 'in_channel',
        text: `${identity} just rolled: ${text}`,
      },
      json: true,
      method: 'POST',
      url: responseUrl,
    },
    callback
  );
};
