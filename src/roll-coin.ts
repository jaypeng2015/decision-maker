import { Callback, Context } from 'aws-lambda';

import State from './state';

const COIN_SIZES = 2;

export const handler = (event: State, context: Context, callback: Callback): void => {
  const { identity, responseUrl } = event;
  const text = `:coin_${Math.floor(Math.random() * COIN_SIZES + 1)}:`;
  callback(null, { text, identity, responseUrl });
};
