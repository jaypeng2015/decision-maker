import _ from 'lodash';
import { Callback, Context } from 'aws-lambda';
import querystring, { ParsedUrlQuery } from 'querystring';

import { RollType } from './constants';
import State from './state';

export const handler = (event: State, context: Context, callback: Callback): void => {
  const body: ParsedUrlQuery = querystring.parse(event.body!);
  const userId = _.get(body, 'user_id');
  const identity = userId ? `<@${_.toString(userId)}>` : 'You';
  let type = RollType.DICE;
  if (_.isString(body.text) && !_.isEmpty(body.text)) {
    if (/^\d+$/.test(_.trim(body.text))) {
      type = RollType.NUMBER;
    } else if (body.text.includes('coin')) {
      type = RollType.COIN;
    }
  }
  const responseUrl = body.response_url;
  const state = { identity, type, responseUrl, number: _.toSafeInteger(body.text) };
  callback(null, state);
};
