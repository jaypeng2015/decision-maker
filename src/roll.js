const { StepFunctions } = require('aws-sdk'); // eslint-disable-line node/no-unpublished-require
const { whilst, waterfall } = require('async');

const stepfunctions = new StepFunctions({ apiVersion: '2016-11-23' });

module.exports.handler = (event, context, callback) => {
  const params = {
    stateMachineArn: process.env.statemachine_arn,
    input: JSON.stringify(event), // Step Functions takes input as a string
    name: `roll-${Date.now()}`,
  };

  waterfall([
    cb => stepfunctions.startExecution(params, cb),
    ({ executionArn }, cb) => {
      let isRunning = true;
      whilst(() => isRunning, (done) => {
        setTimeout(() => {
          stepfunctions.describeExecution({ executionArn }, (err, data) => {
            if (err) {
              done(err);
            } else {
              const { status, output } = data;
              // Step Functions returns output as a string
              const json = output ? JSON.parse(output) : null;
              isRunning = status === 'RUNNING';
              done(null, json);
            }
          });
        }, 1000);
      }, cb);
    },
  ], callback);
};
