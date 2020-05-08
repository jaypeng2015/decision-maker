import { Callback, Context } from 'aws-lambda';
import awsXRay from 'aws-xray-sdk';
import axios from 'axios';
import http from 'http';
import https from 'https';
awsXRay.captureHTTPsGlobal(http, true);
awsXRay.captureHTTPsGlobal(https, true);

import State from './state';

export const handler = (event: State, context: Context, callback: Callback): void => {
  const { identity, text, responseUrl } = event;
  if (!responseUrl) {
    callback();
    return;
  }

  axios
    .post(responseUrl, {
      response_type: 'in_channel',
      text: `${identity} just rolled: ${text}`,
    })
    .then(() => callback())
    .catch((err) => callback(err));
};
