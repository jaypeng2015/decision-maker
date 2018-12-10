import { Callback, Context } from 'aws-lambda';

import State from './state';

export const handler = (event: State, context: Context, callback: Callback) => {
  const { identity, responseUrl, number: max = 1 } = event;
  const text = `${Math.floor(Math.random() * max + 1)}`;
  callback(null, { text, identity, responseUrl });
};
