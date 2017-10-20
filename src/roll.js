const { StepFunctions } = require('aws-sdk'); // eslint-disable-line node/no-unpublished-require

const stepfunctions = new StepFunctions({ apiVersion: '2016-11-23' });

module.exports.handler = (event, context, callback) => {
  const params = {
    stateMachineArn: process.env.statemachine_arn,
    input: JSON.stringify(event), // Step Functions takes input as a string
    name: `roll-${Date.now()}`,
  };

  stepfunctions.startExecution(params, err => callback(err, {
    statusCode: 200,
    body: JSON.stringify({}),
  }));
};
