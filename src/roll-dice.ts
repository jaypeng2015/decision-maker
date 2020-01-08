import { Callback, Context } from 'aws-lambda';

import State from './state';

const MAX_DICE_NUMBER = 6;

export const handler = (event: State, context: Context, callback: Callback): void => {
  const { identity, responseUrl } = event;
  const text = `:dice_${Math.floor(Math.random() * MAX_DICE_NUMBER + 1)}:`;
  callback(null, { text, identity, responseUrl });
};
