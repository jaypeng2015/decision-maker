const { StepFunctions } = require('aws-sdk'); // eslint-disable-line node/no-unpublished-require

const stepFunctions = new StepFunctions({ apiVersion: '2016-11-23' });

module.exports.handler = (event, context, callback) => {
  const params = {
    stateMachineArn: process.env.statemachine_arn,
    input: JSON.stringify(event), // Step Functions takes input as a string
    name: `roll-${Date.now()}`,
  };

  stepFunctions.startExecution(params, err => callback(err, {
    statusCode: 200,
    body: JSON.stringify({}),
  }));
};
