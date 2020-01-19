import { Callback, Context } from 'aws-lambda';

import State from './state';

export const handler = (event: State, context: Context, callback: Callback): void => {
  const { identity, responseUrl, number: max = 100 } = event;
  const text = `${Math.floor(Math.random() * max + 1)} (${max})`;
  callback(null, { text, identity, responseUrl });
};
