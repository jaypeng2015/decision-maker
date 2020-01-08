import { Callback, Context } from 'aws-lambda';
import qs from 'qs';

import { RollType } from './constants';
import State from './state';

export const handler = (event: State, context: Context, callback: Callback): void => {
  const body = qs.parse(event.body);
  const identity = body.user_id ? `<@${body.user_id}>` : 'You';
  let type = RollType.DICE;
  if (body.text) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(body.text.trim())) {
      type = RollType.NUMBER;
    } else if (body.text.includes('coin')) {
      type = RollType.COIN;
    }
  }
  const responseUrl = body.response_url;
  const state = { identity, type, responseUrl, number: parseInt(body.text, 10) };
  callback(null, state);
};
