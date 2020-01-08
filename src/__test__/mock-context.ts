import { noop } from 'lodash';

export default {
  awsRequestId: '',
  callbackWaitsForEmptyEventLoop: true,
  done: noop,
  fail: noop,
  functionName: '',
  functionVersion: '',
  getRemainingTimeInMillis: (): number => 0,
  invokedFunctionArn: '',
  logGroupName: '',
  logStreamName: '',
  memoryLimitInMB: '0',
  succeed: noop,
  timeInMillis: 0,
};
